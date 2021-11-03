import React, { useState } from 'react';
import { OrderDetails1 } from './OrderAPI';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router';



const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 15,
    },
}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});





const RecentOrders = (props) => {
    const {ord , setOrderID} = props;
    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    
    const history = useHistory();

    // pagination........................................................
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleProductClick = (id) => {
        history.push(`/product/${id}`);
    }
    
    return (
        <div className="p-8">
            <h4 class="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">Recent Orders</h4>
            <section class="container mx-auto py-6 font-mono">
            <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div class="w-full overflow-x-auto">
                <table class="w-full">
                    <thead>
                    <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th class="px-4 py-3">Id</th>
                        <th class="px-4 py-3">Date</th>
                        <th class="px-4 py-3">Product</th>
                        <th class="px-4 py-3">Payment</th>
                        <th class="px-4 py-3">Status</th>
                        <th class="px-4 py-3">Total</th>
                        <th class="px-4 py-3">Action</th>
                    </tr>
                    </thead>
                    <tbody class="bg-white">

                    {ord
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item) => (
                                    <tr item={item} key={item._id} class="text-gray-700">
                        <td onClick={() => setOrderID(item._id)} class="px-4 py-3 text-ms font-semibold border">{item._id}</td>
                        <td class="px-4 py-3 text-ms font-semibold border">{item.order.orderDate}</td>
                        <td class="px-4 py-3 text-ms font-semibold border">{item?.product?.product?.name || ""}</td>
                        <td class="px-4 py-3 text-ms font-semibold border">Paid</td>
                        <td class="py-3 px-6 text-center border"> 
                            <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">{item.order.status}</span>
                        </td>
                        <td class="px-4 py-3 text-ms font-semibold border">$ {item.order.price}</td>
                        <td class="px-4 py-3 text-ms font-semibold border">Details</td>
                    </tr>
                                ))}

                    </tbody>
                    <TablePagination
                        // className="flex items-end justify-end"
                        rowsPerPageOptions={[]}
                        component="div"
                        count={ord.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        checkboxSelection
                    />
                </table>
                </div>
            </div>
            </section>

        </div>
    );
};

export default RecentOrders;
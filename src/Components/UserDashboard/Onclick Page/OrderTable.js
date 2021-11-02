import React, { useState } from 'react';
import { OrderDetails } from './OrderAPI';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router';



const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
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
        minWidth: 500,
    },
});





const OrderTable = (props) => {
    const {ord} = props;
    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    
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

    console.log("ordeer3", ord)


    return (
        <div className="">
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                {/* <StyledTableCell>ID</StyledTableCell> */}

                                <StyledTableCell align="left">Order Id</StyledTableCell>
                                {/* <StyledTableCell align="left">Name</StyledTableCell> */}
                                <StyledTableCell align="left">Date</StyledTableCell>
                                <StyledTableCell align="left">Price</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ord && ord
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((item ) => (
                                    <StyledTableRow key={item.name} className={classes.tables}>
                                        {/* <StyledTableCell align="left">{i++}</StyledTableCell> */}
                                        <StyledTableCell align="left">{item._id}
                                        </StyledTableCell>
                                        {/* <StyledTableCell align="left">{item.user.name || "Product 101"}
                                        </StyledTableCell> */}
                                        <StyledTableCell align="left">{item.order.orderDate}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{item.order.price}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{item?.order.status}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
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
                </TableContainer>

            </div>
        </div>
    );
};

export default OrderTable;
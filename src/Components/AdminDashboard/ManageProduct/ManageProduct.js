import { Button, TableContainer, TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Logo from '../../Navbar/Logo/Logo';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { withStyles, makeStyles } from "@material-ui/core/styles";


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
        minWidth: 700,
    },
});



const ManageProduct = () => {

    const [product, setProduct] = useState([]);
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    useEffect(() => {
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])
    console.log(product);


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };
    // pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const deleted = () => {
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }

    const handleDeleteProduct = (id) => {
        fetch(`https://mamardukan.herokuapp.com/products/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // alert('Product Deleted')
                    deleted();
                }
            })
    }


    // let i = 1;

    return (
        <div className=" bg-gray-800 ">
            <div className="w-screen h-20 p-6">
                <Logo />
            </div>

            <div className="flex flex-wrap">
                <AdminSidebar />

                <div className="sm:w-3/5 w-screen mx-4">
                    <h1 className="mt-3 text-2xl font-bold text-white m-2 ">
                        Manage Products
                    </h1>


                    <div className="w-full">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        {/* <StyledTableCell>ID</StyledTableCell> */}

                                        <StyledTableCell align="left">Name</StyledTableCell>
                                        <StyledTableCell align="left">Price</StyledTableCell>
                                        <StyledTableCell align="left">Brand</StyledTableCell>
                                        <StyledTableCell align="left">Brand</StyledTableCell>
                                        <StyledTableCell align="left">Category</StyledTableCell>
                                        <StyledTableCell align="left">color</StyledTableCell>
                                        <StyledTableCell align="left">Action</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {product
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((product) => (
                                            <StyledTableRow key={product.name} className={classes.tables}>
                                                {/* <StyledTableCell align="left">{i++}</StyledTableCell> */}
                                                <StyledTableCell align="left">{product.name}</StyledTableCell>
                                                <StyledTableCell align="left">{product.price}</StyledTableCell>
                                                <StyledTableCell align="left">
                                                    {product.brand}
                                                </StyledTableCell>
                                                <StyledTableCell align="left">
                                                    <img className="w-12" src={product.img} alt="" />
                                                </StyledTableCell>
                                                <StyledTableCell align="left">{product.category}</StyledTableCell>
                                                <StyledTableCell align="left">{product.color}</StyledTableCell>

                                                <StyledTableCell align="left">
                                                        <button
                                                            onClick={() => handleDeleteProduct(product._id)}
                                                            className="p-3 rounded-full bg-blue-400 hover:bg-red-500" >
                                                            Delete
                                                        </button>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <TablePagination
                            rowsPerPageOptions={[]}
                            component="div"
                            count={product.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            checkboxSelection
                        />

                    </div>


                </div>
            </div>
        </div>
    );
};

export default ManageProduct;

import { Button, TableContainer, TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Logo from '../../Navbar/Logo/Logo';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';


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
    const [rowsPerPage, setRowsPerPage] = useState(2);

    useEffect(() => {
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])
    console.log(product);


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        // setPage(0);
    };
    // pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    let i = 1;

    return (
        <div className=" bg-gray-800 ">
            <div className="w-screen h-20 p-6">
                <Logo />
            </div>

            <div className="flex flex-wrap">
                <AdminSidebar />

                <div className="sm:w-3/5 w-screen  p-4">
                    <h1 className="mt-3 text-2xl font-bold text-white m-4 ">
                        Manage Products
                    </h1>


                    <div className="">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>ID</StyledTableCell>

                                        <StyledTableCell align="left">Name</StyledTableCell>
                                        <StyledTableCell align="left">Price</StyledTableCell>
                                        <StyledTableCell align="left">Profit Percentage</StyledTableCell>
                                        <StyledTableCell align="left">Product Type</StyledTableCell>
                                        <StyledTableCell align="left">Action</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {product
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((u) => (
                                            <StyledTableRow key={u.name} className={classes.tables}>
                                                <StyledTableCell align="left">{i++}</StyledTableCell>
                                                <StyledTableCell align="left">{u.name}</StyledTableCell>
                                                <StyledTableCell align="left">{u.price}</StyledTableCell>
                                                <StyledTableCell align="left">
                                                    {u.profitPercentage}
                                                </StyledTableCell>
                                                <StyledTableCell align="left">
                                                    {u.productType}
                                                </StyledTableCell>

                                                <StyledTableCell align="left">
                                                    <div className="d-flex">
                                                        {/* <CreateIcon
                          onClick={() => handleUpdate(u._id)}
                          className="icon"
                        /> */}

                                                        <Link to={"/delete/" + u.id}>
                                                            <Button className="action__btn" variant="danger">
                                                                Delete
                                                            </Button>
                                                        </Link>
                                                    </div>
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
                        />

                    </div>


                </div>
            </div>
        </div>
    );
};

export default ManageProduct;

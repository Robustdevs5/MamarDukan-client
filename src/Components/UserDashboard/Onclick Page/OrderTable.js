import React from 'react';
import { OrderDetails } from './OrderAPI';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
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
        minWidth: 500,
    },
});





const OrderTable = (props) => {
    const {ord} = props;
    const classes = useStyles();

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
                                <StyledTableCell align="left">Name</StyledTableCell>
                                <StyledTableCell align="left">Date</StyledTableCell>
                                <StyledTableCell align="left">Price</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ord && ord.map((item ) => (
                                    <StyledTableRow key={item.name} className={classes.tables}>
                                        {/* <StyledTableCell align="left">{i++}</StyledTableCell> */}
                                        <StyledTableCell align="left">{item.ID}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{item.Name || "Product 101"}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{item.Date}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{item.Price}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{item.Status}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </div>
    );
};

export default OrderTable;
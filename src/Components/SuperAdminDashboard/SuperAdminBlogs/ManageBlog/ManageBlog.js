import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DashboardContainer } from '../../Style/AddSuperAdminStyle';
import SuperAdminSidebar from '../../SuperAdminSidebar/SuperAdminSidebar';
import TopbarSuperAdminDashboard from '../../Topbar-SuperAdminDashboard/TopbarSuperAdminDashboard';


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

const ManageBlog = () => {

    const [blogs, setBlogs] = useState([]);
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    //Fetching Product............................
    useEffect(() => {
        fetch(`http://localhost:5000/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data.blog))
    }, [])
    

    // pagination................................
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    //Delete.......................................
    const deleted = () => {
        fetch(`http://localhost:5000/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data.products))
    }


    const handleDeleteBlog = (id) => {
        fetch(`http://localhost:5000/blogs/${id}`, {
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


    //Update push.......................................................
    const history = useHistory();
    const handleUpdateBlog = (id) => {
        history.push(`/updateBlog/${id}`);
    }


    return (
        <div className=" bg-gray-800 ">
            {/* <div className="w-screen h-20 p-6">
                <Logo />
            </div> */}

                <DashboardContainer>
                    <SuperAdminSidebar/>
                
                <div className="md:w-5/6 w-full h-screen scrollBar">
                    <TopbarSuperAdminDashboard/>

                <div className="sm:w-4/5 w-screen mx-4">
                    <h1 className="mt-3 text-2xl font-bold text-white m-2 ">
                        Manage Blog
                    </h1>


                    <div className="w-full">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        <StyledTableCell align="left">Name</StyledTableCell>
                                        <StyledTableCell align="left">Category</StyledTableCell>
                                        <StyledTableCell align="right" className="">Action</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {blogs
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((blog) => (
                                            <StyledTableRow key={blog.name} className={classes.tables}>
                                                <StyledTableCell align="left">{blog.name}</StyledTableCell>
                                                <StyledTableCell align="left">{blog.category}</StyledTableCell>

                                                <StyledTableCell align="left">
                                                    <button
                                                        onClick={() => handleUpdateBlog(blog._id)}
                                                        className="p-3 rounded-full bg-blue-400 hover:bg-blue-800 hover:text-gray-100" 
                                                        >
                                                        {/* Delete */}
                                                        <FontAwesomeIcon
                                                            icon={faEdit}
                                                        ></FontAwesomeIcon>
                                                        {/* Update */}
                                                    </button>
                                                </StyledTableCell>

                                                <StyledTableCell align="left">
                                                    <button
                                                        onClick={() => handleDeleteBlog(blog._id)}
                                                        className="p-3 rounded-full bg-red-400 hover:bg-red-800 hover:text-gray-100" 
                                                        >
                                                        {/* Delete */}
                                                        <FontAwesomeIcon
                                                            icon={faTrashAlt}
                                                        ></FontAwesomeIcon>
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
                            count={blogs.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            checkboxSelection
                        />

                    </div>


                </div>
            </div>
            </DashboardContainer>
        </div>
    );
};

export default ManageBlog;

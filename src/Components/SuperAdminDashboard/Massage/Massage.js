import { TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Message = () => {
    const [messageDetails, setMessage] = useState([])
    useEffect(() => {
        fetch(`https://mamar-dukan.herokuapp.com/message`)
        .then (res => res.json())
        .then (data => setMessage(data.result.message))
    }, []) 
    
    const [Report, setReport] = useState([])
    useEffect(() => {
        fetch(`https://mamar-dukan.herokuapp.com/report`)
        .then (res => res.json())
        .then (data => setReport(data.result.Report))
    }, [])

    

    // pagination........................................................
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // pagination........................................................
    const [Reportpage, setReportPage] = useState(0);
    const [ReportrowsPerPage, setReportRowsPerPage] = useState(6);
    const ReporthandleChangeRowsPerPage = (event) => {
        setReportRowsPerPage(event.target.value);
        setReportPage(0);
    };

    const ReporthandleChangePage = (event, newPage) => {
        setReportPage(newPage);
    };



    return (

        <div class="w-screen grid grid-cols-1 pb-20">
        <div class="w-screen grid grid-cols-1 overflow-x-hidden">
            <main className=" grid grid-cols-4 gap-4 bg-gray-100">
            <div className=" overflow-y-auto overflow-hidden h-screen">
                <div className="px-4 py-2 flex items-center justify-between border-l border-r border-b">
                    <button className="flex items-center mt-3 text-2xl font-bold text-gray-900 m-2 border-l-2 border-red-600 pl-2 tracking-tighter">
                        <span>Subscriber Message</span>
                        <i className="ml-2 fa fa-angle-down justify-between" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="pt-3 pb-4 ">
                    
                {messageDetails
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((item ) => (
                                    <div item={item} key={item._id}  className="block bg-white py-3 border-t">
                                        <div className="px-4 py-2 flex  justify-between">
                                            <span className="text-sm font-semibold text-gray-900">{item.name}</span>
                                            <span className="text-sm font-semibold text-gray-600">{(new Date(item.date).toLocaleDateString())}</span>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-900 px-4 py-2">{item.email}</span>
                                        <p className="px-4 py-2 text-sm font-semibold text-gray-700">{item.message}</p>
                                    </div>
                                ))}
                                <TablePagination
                        rowsPerPageOptions={[]}
                        component="div"
                        count={messageDetails.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        checkboxSelection
                    />
                    
                    {/* <a href="#" className="block bg-white py-3 border-t">
                        <div className="px-4 py-2 flex  justify-between">
                            <span className="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                            <span className="text-sm font-semibold text-gray-600">2 days ago</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 px-4 py-2">Refund</span>
                        <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing dolor sit sit elo  amet consectetur adipisicin elit....</p>
                    </a> */}
                </div>
            </div>
            <div className="col-span-2 flex flex-col  inline-block overflow-y-auto overflow-hidden h-screen bg-gray-100">
                
                <div className="shadow-lg">
                    <div className="pt-3 pb-4 ">
                        <div className="px-4 py-2 flex items-center justify-between border-l border-r border-b">
                            <button className="flex items-center mt-3 text-2xl font-bold text-gray-900 m-2 border-l-2 border-red-600 pl-2 tracking-tighter">
                                <span>User Report</span>
                                <i className="ml-2 fa fa-angle-down justify-between" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div>


                {
                            Report
                            .slice(Reportpage * ReportrowsPerPage, Reportpage * ReportrowsPerPage + ReportrowsPerPage)
                            .map((item) => (
                                <div className="w-full shadow-lg pt-4 ml-2 mr-2 rounded-lg">
                        <div  className="block bg-white py-3 border-t pb-4">
                            <div className="px-4 py-2 flex  justify-between">
                                <span className="text-sm font-semibold text-gray-900">{item.name}</span>
                                <div className="flex">
                                    <span className="px-4 text-sm font-semibold text-gray-600">{(new Date(item.date).toLocaleDateString())}</span>
                                </div>
                                
                            </div>
                            <div className="px-4 py-2"><span className="text-xl font-semibold text-gray-900">{item.subject}</span></div>
                            <p className="w-max px-4 py-2 text-sm font-semibold text-gray-700">{item.message}</p>
                        </div>
                    </div>
                            ))
                        }
                        <TablePagination
                        rowsPerPageOptions={[]}
                        component="div"
                        count={Report.length}
                        rowsPerPage={ReportrowsPerPage}
                        page={Reportpage}
                        onPageChange={ReporthandleChangePage}
                        onRowsPerPageChange={ReporthandleChangeRowsPerPage}
                        checkboxSelection
                    />




                    {/* <div className="shadow-lg pt-4 ml-2 mr-2 rounded-lg">
                        <a href="#" className="block bg-white py-3 border-t pb-4">
                            <div className="px-4 py-2 flex  justify-between">
                                <span className="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                                <div className="flex">
                                    <span className="px-4 text-sm font-semibold text-gray-600"> yesterday</span>
                                    <img className="h-6 w-6 rounded-full object-cover"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                                        alt="" />
                                </div>
                            </div>
                            <p className="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
                        </a>
                    </div> */}
                    
                </div>
            </div>
        </main>
        </div>
    </div>



       
        //                 {
        //                     Report
        //                     .slice(Reportpage * ReportrowsPerPage, Reportpage * ReportrowsPerPage + ReportrowsPerPage)
        //                     .map((item) => (
        //                         <div item={item} key={item.id} className="shadow-lg pt-4 ml-2 mr-2 rounded-lg">
        //                     <a href="#" className="block bg-white py-3 border-t pb-4">
        //                         <div className="px-4 py-2 flex  justify-between">
        //                             <span className="text-sm font-semibold text-gray-900">{item.name}</span>
        //                             <div className="flex">
        //                                 <span className="px-4 text-sm font-semibold text-gray-600">{(new Date(item.date).toLocaleDateString())}</span>
        //                             </div>
        //                             <br></br>
        //                             <div className="flex">
        //                                 <span className="px-4 text-sm font-semibold text-gray-600">{item.subject}</span>
        //                             </div>
        //                         </div>
        //                         <p className="px-4 py-2 text-sm font-semibold text-gray-700">{item.message}</p>
        //                     </a>
        //                 </div>
        //                     ))
        //                 }
        //                 <TablePagination
        //                 // className="flex items-end justify-end"
        //                 rowsPerPageOptions={[]}
        //                 component="div"
        //                 count={Report?.length}
        //                 ReportrowsPerPage={ReportrowsPerPage}
        //                 Reportpage={Reportpage}
        //                 onPageChange={ReporthandleChangePage}
        //                 onRowsPerPageChange={ReporthandleChangeRowsPerPage}
        //                 checkboxSelection
        //             />
                        
        //             </div>
        //         </div>
        //     </main>
        //     </div>
        // </div>
    );
};

export default Message;
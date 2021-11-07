// import 'date-fns';
// import React, { useEffect, useState } from 'react';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';



// const Jahid = () => {

//     const [selectedFromDate, setSelectedFromDate] = useState(new Date());
//     const [selectedToDate, setSelectedToDate] = useState(new Date());



//     const handleFromDateChange =()=> {
        
//     }

//     const handleToDateChange =()=> {

//     }



//     return (
//         <div>


//             <div >
//                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                     <KeyboardDatePicker
//                         style={{ marginLeft: '15%' }}
//                         margin="normal"
//                         id="date-picker-dialog"
//                         label="From"
//                         format="MM/dd/yyyy"
//                         minDate="2021-01-01"
//                         value={selectedFromDate}
//                         onChange={handleFromDateChange}
//                         KeyboardButtonProps={{
//                             'aria-label': 'change date',
//                         }}
//                     />
//                 </MuiPickersUtilsProvider>


//                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                     <KeyboardDatePicker
//                         style={{ marginRight: '30%', float: 'right' }}
//                         margin="normal"
//                         id="date-picker-dialog"
//                         label="TO"
//                         format="MM/dd/yyyy"
//                         minDate="2021-01-01"
//                         value={selectedToDate}
//                         onChange={handleToDateChange}
//                         KeyboardButtonProps={{
//                             'aria-label': 'change date',
//                         }}
//                     />
//                 </MuiPickersUtilsProvider>

//             </div>
//         </div>
//     );
// };

// export default Jahid;

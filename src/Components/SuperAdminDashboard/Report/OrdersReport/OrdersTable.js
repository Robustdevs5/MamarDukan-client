import React, { useState } from 'react';
import ShipingInfo from '../../../UserDashboard/Onclick Page/ShipingInfo';
import DeliveryDetails from './DeliveryDetails';
import DeliveryReport from './DeliveryReport';
import Modal from '../../../Modal/Modal';


const OrdersTable = (props) => {


    const {Data  } = props;
    const [Dropdown , setDropdown] = useState(false)
    
    const [modalUpdateStatus, setModalStatus] = useState(false);
    const [modalId, setModalId] = useState(null);

    const handleModalOpen = (id) => {
        setModalStatus(true);
        setModalId(id)
    }

    
    return (
        <div>
            <h4 class="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">All Customers</h4>
                <section class="container mx-auto py-6 font-mono">
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th onClick={() => setDropdown(false)} class="px-4 py-3">Order ID</th>
                                <th class="px-4 py-3">Name</th>
                                <th class="px-4 py-3">Date</th>
                                <th class="px-4 py-3">Amount</th>
                                <th class="px-4 py-3">Status</th>
                            </tr>
                            </thead><tbody class="bg-white">
                            {
                                Data.map((item, index) => {
                                return [
                                                               
                                    <tr item={item} key={index} class="text-gray-700 m-8">
                                    <td  onClick={() => handleModalOpen(item._id)} class="px-4 py-3 text-ms font-semibold border cursor-pointer">{item._id}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.user.name}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.order.orderDate}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.order.price}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.order.status}</td>
                                   </tr> 
                                ]
                                })

                            }
                            </tbody>
                        </table>
                        </div>
                    </div>
                    {modalUpdateStatus && <Modal
                        setModalStatus={setModalStatus}
                            modalId={modalId}
                        />}


                </section>
        </div>
    );
};

export default OrdersTable;
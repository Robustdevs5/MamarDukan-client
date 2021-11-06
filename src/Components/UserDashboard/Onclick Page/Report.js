import React, { useState } from "react";
import { toast } from "react-toastify";

const Report = () => {
  const [report, setReport] = useState({
    date : new Date(),
    status: "PENDING",
    name : '',
    email :'',
    subject : '',
    department : "",
    message : '',
    updatedDate : '',
    phone : '',

  })

  const handleOnChange = (e) => {
    const newUserInfo = {
        ...report
      };
      newUserInfo[e.target.name] = e.target.value;
      setReport(newUserInfo);
}


const handleSubmit = (e) => {
 e.preventDefault();
 if (report) {
  const RepoteRoute = `https://mamar-dukan.herokuapp.com/report`;
  fetch(RepoteRoute, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(report),
  })
      .then(async res => await res.json())
      .then(async user => {
          user ? alert(user.message) : alert("failed")
      })
      .catch(error => {
          alert(error.message);
      });
} else {
  toast.error("Your Passwords don't match!", {
      position: "top-right",
  });
};
}
  return (
    <div className="container px-12 mx-auto mt-10 pb-20">
      <div>
        <h2 className="text-3xl font-bold text-center pb-10">Get In Touch</h2>
        <p className="text-xl text-center text-gray-700 pb-8">
          If you face any problem or if you have any inquiry to inform the
          authority to fill up the form.
        </p>
      </div>
      <div className="">
        <div className="w-full px-6 py-6 text-center bg-white shadow">
          <form onClick={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input
                  className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="namr"
                  name="name"
                  onBlur={handleOnChange}
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input
                  className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  onBlur={handleOnChange}
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input
                  className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone"
                  type="phone"
                  name="phone"
                  onBlur={handleOnChange}
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input
                  className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="subject"
                  type="text"
                  name="subject"
                  onBlur={handleOnChange}
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-700"
                >
                  Department
                </label>
                <select
                  id="category"
                  name="department"
                  onBlur={handleOnChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Admin</option>
                  <option>Support</option>
                  <option>Account</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  name="message"
                  onBlur={handleOnChange}
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div>
                <button
                  className="btn shadow bg-red-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded"
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Report;

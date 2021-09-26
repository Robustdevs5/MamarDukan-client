import React, { useState } from "react";
import Logo from "../../Navbar/Logo/Logo";
import AdminPanel from "../AdminPanel/AdminPanel";
import AddProductForm from "./AddProductForm";
// import AdminPanel from "../AdminPanel/AdminPanel";

const AddProduct = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("description", info.description);
    formData.append("size", info.size);
    formData.append("category", info.category);
    formData.append("color", info.color);
    formData.append("department", info.department);
    formData.append("seller", info.seller);
    formData.append("price", info.price);
    formData.append("discount", info.discount);
    formData.append("brand", info.brand);

    fetch("http://localhost:9999/addProduct", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventDefault();
  };

  return (
    <div className=" bg-gray-800 ">
      <div className="w-screen h-20 p-6">
        <Logo />
      </div>

      <div className="flex  md:flex-row flex-col">
        <AdminPanel></AdminPanel>
        <AddProductForm
          className="  p-2"
          handleBlur={handleBlur}
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddProduct;

import { Delete, Edit } from "@mui/icons-material";
import React from 'react';



const ProductList = (props) => {

    const { name, price, _id } = props.product;

    console.log(props.product);


    const handleDelete = (e) => {
        fetch("http://localhost:9999/delete/" + _id, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((res) => console.log(res));
        e.preventDefault();
    };


    return (
        <div className="flex  justify-between font-semibold p-3">
            <p>{name}</p>
            <p>{price}</p>
            <p className="cursor-pointer">
                {" "}
                <Edit></Edit>
                <Delete onClick={handleDelete}></Delete>
            </p>
        </div>
    );
};

export default ProductList;

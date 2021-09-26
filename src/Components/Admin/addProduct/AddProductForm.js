import React from "react";

const AddProductForm = ({ handleBlur, handleFileChange, handleSubmit }) => {
  return (
    <section className="m-4 ">
      <h1 className="font-bold text-white p-4 text-2xl">Add a new product</h1>
      <div class="  ">

        <form
          class=" shadow-md rounded bg-gray-100 p-6 pb-8 mb-4 grid grid-cols-3 gap-4"
          onSubmit={handleSubmit}
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
              onBlur={handleBlur}
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>

          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="category"
            >
              Category
            </label>
            <input
              class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
              onBlur={handleBlur}
              type="text"
              name="category"
              placeholder="Category"
            />
          </div>
          
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="department"
            >
              Department
            </label>
            <input
              class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
              onBlur={handleBlur}
              type="text"
              name="department"
              placeholder="department"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="discount"
            >
              Discount
            </label>
            <input
              class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
              onBlur={handleBlur}
              type="text"
              name="discount"
              placeholder="discount"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="brand"
            >
              Brand
            </label>
            <input
              class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
              onBlur={handleBlur}
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="size"
            >
              Size
            </label>
            <input
              className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
              onBlur={handleBlur}
              type="text"
              name="size"
              placeholder="Size"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="color"
            >
              Color
            </label>
            <input
              class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
              onBlur={handleBlur}
              type="text"
              name="color"
              placeholder="color"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="price"
            >
              price
            </label>
            <input
              class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
              onBlur={handleBlur}
              type="text"
              name="price"
              placeholder="price"
            />
          </div>{" "}
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="seller"
            >
              seller
            </label>
            <input
              class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
              onBlur={handleBlur}
              type="text"
              name="seller"
              placeholder="seller"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="image"
            >
              image
            </label>
            <input
              class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
              onBlur={handleFileChange}
              type="file"
              name="image"
              placeholder="image"
            />
          </div>{" "}
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="description"
            >
              Description
            </label>
            <input
              class="shadow appearance-none h-24 border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
              onBlur={handleBlur}
              type="textarea"
              name="description"
              placeholder="Description"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              submit
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default AddProductForm;

import React from 'react';



const AddressFrom = () => {



    const handleSubmit = (e) => {
        e.preventDefault();
    }



    return (
        <div className="">
            <h1 className="text-2xl">Create Address</h1>

            <form onClick={handleSubmit}>

                <h3 className="py-2">Full Name :</h3>
                <input placeholder="Your Name" type="text" name="name" required
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                />

                <h3 className="py-2">Your Email :</h3>
                <input placeholder="Your Email" type="email" name="email" required
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                />

                <h3 className="py-2">Phone :</h3>
                <input placeholder="Your Phone" type="number" name="phone" required
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                />

                <h3 className="py-2">Division :</h3>
                <select
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                    name="division" id="division">
                    <option value="Dhaka">Dhaka</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                </select>

                <h3 className="py-2">City :</h3>
                <input placeholder="Your City" type="text" name="city" required
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                />

                <h3 className="py-2">Address :</h3>
                <input placeholder="Your Address" type="text" name="address" required
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                />

                {/* <input type="checkbox" id="def" name="defaultAddress" value="1"
                    className="w-4 h-4"
                />
                <label for="def"
                    className="mx-2 py-6"
                >
                    Use this as default
                </label> */}

                {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="w-4 h-4"/> */}

                {/* <input type="checkbox" name="asdas" id="vehicle1" value="ok"/>
                <label for="vehicle1"> I have a bike</label> */}

                {/* <input type="checkbox" name="defaultAddress" value="default" required
                    className="w-4 h-4"
                />
                <label for="defaultAddress"> I have a bike</label> */}

                {/* <input type='checkbox' name='thing' value='valuable' id="thing"/><label for="thing">dgdfgdg</label> <label>get an army</label> */}

                <input type="checkbox" class="w-4 h-4 appearance-none checked:bg-blue-600 bg-gray-500 checked:border-transparent"/>

                <input type="submit" value="Submit"
                    className="p-3 primary_BTN_Outline rounded duration-300 w-full cursor-pointer"
                />
            </form>

        </div>
    );
};

export default AddressFrom;

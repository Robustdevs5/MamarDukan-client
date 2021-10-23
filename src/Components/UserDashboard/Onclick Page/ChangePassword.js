import React from 'react';



const ChangePassword = () => {



    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleCurrentPassword = (e) => {

    }
    const handleNewPassword = (e) => {

    }
    const handleConfirmPassword = (e) => {

    }




    return (
        <div className="p-8">

            <h1 className="font-bold text-2xl my-8">Change Password</h1>

            <form onClick={handleSubmit}>
                <h3 className="py-2">Current password :</h3>
                <input placeholder="Current password" type="text" name="currentPassword" required
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                    onChange={handleCurrentPassword}
                />

                <h3 className="py-2">New Password :</h3>
                <input placeholder="New Password" type="text" name="newPassword" required
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                    onChange={handleNewPassword}
                />

                <h3 className="py-2">Confirm Password :</h3>
                <input placeholder="Confirm Password" type="text" name="confirmPassword" required
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                    onChange={handleConfirmPassword}
                />

                <input type="submit" value="Submit"
                    className="p-3 primary_BTN_Outline rounded duration-300 w-full cursor-pointer"
                />
            </form>
        </div>
    );
};

export default ChangePassword;

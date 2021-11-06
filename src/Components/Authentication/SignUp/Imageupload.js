import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Imageupload = ({setImageURLStatus, imageURLStatus}) => {
    
    const handleImageUpload = (event) => {
        const imageData = new FormData()
        imageData.set('key', 'ca6c9c7b95b538d35b5137a6b8deb060');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURLStatus(response.data.data.display_url);
                // setImageURLStatus(true);
                if (response) {
                    toast.success('Uploaded your Successfully', {
                        position: "bottom-right",
                    });
                }
            })
            .catch(function (error) {
                toast.error(error, {
                    position: "bottom-right",
                });
            });
    }

    return (
        <>
            <label>
            <input
                class="shadow appearance-none  hover:bg-red-600 hover:text-gray-50 rounded w-full text-gray-700 leading-tight focus:ring-2 focus:ring-red-600"
                onChange={handleImageUpload}
                type="file"
                name="image"
            />
            
        </label>
            {imageURLStatus.length > 0?
                <small className="text-green-600 py-3">Image Uploaded</small>
                :
                <small className="text-red-700 py-3">Upload your Image</small>
            }
        </>
    );
};

export default Imageupload;
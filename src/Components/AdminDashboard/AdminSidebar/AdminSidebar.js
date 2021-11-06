import { AiFillPlusCircle, AiFillWindows, AiOutlineUserAdd } from 'react-icons/ai';
import { ImBlogger, ImBlogger2 } from 'react-icons/im';
import { useHistory } from 'react-router';



const AdminSidebar = () => {

    const history = useHistory();

    return (
        <div class=" md:w-1/5  w-screen h-full">
            <div className="  bg-gray-800 text-white ">
                <button
                    className="flex  bg-gray-500 hover:bg-pink-600 focus:bg-blue-500 border-0 m-4 p-4  rounded-2xl"
                    onClick={() => history.push("/addProduct")}
                >
                   
                    <AiFillPlusCircle className="m-1" />
                        Add Product                    
                </button>
                <br />
                <button
                    className="flex  bg-gray-500 hover:bg-pink-600 focus:bg-blue-500 border-0 m-4 p-4  rounded-2xl "
                    onClick={() => history.push("/addAdmin")}
                >
                    <AiOutlineUserAdd className="m-1" />
                    Make admin
                </button>
                <br />
                <button
                    className="flex  bg-gray-500 hover:bg-pink-600 focus:bg-blue-500 border-0 m-4 p-4  rounded-2xl"
                    onClick={() => history.push("/manageProduct")}
                >
                    <AiFillWindows className="m-1" />
                    Manage Product
                </button>
                <br />
                <button
                    className="flex  bg-gray-500 hover:bg-pink-600 focus:bg-blue-500 border-0 m-4 p-4  rounded-2xl"
                    onClick={() => history.push("/addBlog")}
                >
                    <ImBlogger className="m-1" />
                    Add Blog
                </button>
                <br />
                <button
                    className="flex  bg-gray-500 hover:bg-pink-600 focus:bg-blue-500 border-0 m-4 p-4  rounded-2xl"
                    onClick={() => history.push("/manageBlog")}
                >
                    <ImBlogger2 className="m-1" />
                    Manage Blog
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
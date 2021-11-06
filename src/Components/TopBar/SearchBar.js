import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router";

import styles from "../StyledComponent/TopBar.module.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.products.filter(o => Object.keys(o).some(k =>
        String(o[k]).toLowerCase().includes(event.target.value.toLowerCase()))
    );
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const history = useHistory();
  const handleProductClick = (id) => {
      history.push(`/product/${id}`);
  }


  return (
    <div className="md:w-3/5 w-full h-10 ">
      <div className=' h-10 items-center flex flex-row'>
        <input
          type="text"
          className={styles.topBar_search_input}
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />

        <div className={styles.topBar_search_icon}>
          {filteredData.length === 0 ? (
            <AiOutlineSearch size={30}/>
          ) : (
            <AiOutlineCloseCircle size={30} id="clearBtn" onClick={clearInput} />
          )}
        </div>

        
      </div>
      
      {filteredData.length != 0 && (
        <div>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div key={key}>
                  <div className="cursor-pointer flex rounded items-center justify-between py-2 px-5 bg-gray-900 border border-red-900 hover:bg-red-600" onClick={() => handleProductClick(value._id)}>
                        <div className="w-10 h-10">
                            <img className="rounded cursor-pointer h-full w-full" src={value.img} alt="8192" />
                        </div>
                        <p className='text-white'>{value.name} </p>
                        {/* {notFound && <p className="text-red-600 p-4 flex items-center justify-center">No Order found!</p>} */}
                    </div>
              </div>
            );
          })}
          
        </div>
      )}
    </div>
  );
}

export default SearchBar;

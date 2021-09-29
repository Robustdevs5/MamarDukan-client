import React, { useState } from 'react';
import Description from './Description';
import Specification from './Specification';
import Review from './Review';
import Vendor from './Vendor';

const Writing = () => {
    const [active, setActive] = useState('Description')
    console.log(active) 
    const button = [
        {name: 'Description'},
        {name: 'Specification'},
        {name: 'Reviews'},
        {name: 'Vendor'}
    ]
    return (
        <div>
            <div className="mt-10" style={{display: 'flex', flexDirection: 'row'}}>
                {
                    button.map((item, index) =>
                        <button onClick={() => setActive(`${item.name}`)} className="m-auto rounded-full p-2 border-4 border-indigo-600"  key={index} item={item}>{item.name} </button>
                )
                }
                
                
                
            </div>
            <div>
                {active === 'Description' && <Description />}
                {active === 'Specification' && <Specification />}
                {active === 'Reviews' && <Review />}
                {active === 'Vendor' && <Vendor />}
            </div>
        </div>
    );
};

export default Writing;
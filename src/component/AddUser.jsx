import React from 'react';

const AddUser = () => {
    return (
        <div>
            <h2>USer List:</h2>
            <input type="text" placeholder='Add user' className='border' />
            <button className='py-1 px-4 bg-cyan-700 rounded-2xl m-4'>Add</button>
        </div>
    );
};

export default AddUser;
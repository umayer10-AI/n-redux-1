"use client"
import { addUser } from '@/redux/slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddUser = () => {

    const [s,setS] = useState('')
    const dispatch = useDispatch()

    const a = () => {
        dispatch(addUser(s))
    }

    return (
        <div>
            <h2>USer List:</h2>
            <input onChange={(e) => setS(e.target.value)} type="text" placeholder='Add user' className='border' />
            <button onClick={a} className='py-1 px-4 bg-cyan-700 rounded-2xl m-4'>Add</button>
        </div>
    );
};

export default AddUser;
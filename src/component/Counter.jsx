"use client"
import { increment } from '@/redux/slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

    const cnt = useSelector(v => v.counter.value)

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())} className='py-2 px-4 bg-cyan-700 text-white rounded-2xl'>Count</button>
            <button onClick={() => dispatch(increment())} className='py-2 px-4 bg-red-700 text-white rounded-2xl'>Count</button>
            <h2>Count: {cnt}</h2>
        </div>
    );
};

export default Counter;
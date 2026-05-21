"use client"
import React from 'react';
import { useSelector } from 'react-redux';

const DisplayUser = () => {

    const data = useSelector(v => v.counter.users)

    return (
        <div>
            <h2 className='mt-5'>User List: </h2>
            <div>
                {
                    data?.map((v,i) => (
                        <h2 key={i}>{v}</h2>
                    ))
                }
            </div>
        </div>
    );
};

export default DisplayUser;
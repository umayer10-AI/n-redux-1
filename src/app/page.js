import AddUser from '@/component/AddUser';
import Counter from '@/component/Counter';
import DisplayUser from '@/component/DisplayUser';
import React from 'react';

const page = () => {
  return (
    <div>
      Hello Umayer
      <Counter></Counter>
      <AddUser></AddUser>
      <DisplayUser></DisplayUser>
    </div>
  );
};

export default page;
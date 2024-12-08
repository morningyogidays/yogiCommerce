"use client";
import React from 'react';
import Banner from '../component/banner';
import Sorter from '../component/sorter';
import Search from '../component/search';

const Home = () => {
  return (
    <>
      <Banner/>
      <p className='flex justify-center font-md lg:font-lg mt-5 mb-5'>NEW ARRIVALS</p>
      <div className="flex justify-center lg:justify-between">
        <div className="hidden lg:block">
          <Search />
        </div>
        <Sorter />
      </div>
    </>
    
  );
};

export default Home;

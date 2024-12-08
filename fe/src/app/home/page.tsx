"use client";
import React from 'react';
import Banner from '../component/banner';
import Sorter from '../component/sorter';
import Search from '../component/search';
import Products from '../component/products';

const Home = () => {
  return (
    <>
      <Banner/>
      <p className='flex justify-center font-md lg:font-lg mt-5 mb-5'>NEW ARRIVALS</p>
      <div className="flex justify-center lg:justify-between mb-10">
        <div className="hidden lg:block">
          <Search />
        </div>
        <Sorter />
      </div>
      <Products/>
    </>
    
  );
};

export default Home;

"use client";
import React, { useEffect, useState } from 'react';
import Banner from '../component/banner';
import Sorter from '../component/sorter';
import Search from '../component/search';
import Products from '../component/products';
import Add from '@/assets/icons/add.svg'
import { useRouter } from "next/navigation";
import Image from "next/image";

interface productType{
  _id: string;
  name: string;
  describe: string;
  price: number;
  quantity: number;
  img: string;
  __v: number;
}

const Home = () => {
  const router = useRouter(); 
  const [result, setResult] = useState<productType[]>([]); 
  const [error, setError] = useState<string | undefined>(undefined); 

  async function fetchProductList(): Promise<void> {
    try {
      const response = await fetch(
        '/api/v1/product'
      );
  
      if (!response.ok) {
        throw new Error('เกิดข้อผิดพลาดจากเซิร์ฟเวอร์');
      }
  
      const contentType = response.headers.get("Content-Type");
      if (!contentType?.includes("application/json")) {
        throw new Error("Expected JSON response");
      }
  
      const data = await response.json();
      
      if (data) {
        setResult(data);
      } else {
        setResult([]);
        setError(data.message ?? "เกิดข้อผิดพลาดระหว่างการโหลดข้อมูลสินค้า");
      }
    } catch (error) {
      console.error("fetchProductList error:", error);
      setError("ไม่สามารถโหลดข้อมูลสินค้าได้ กรุณาลองใหม่อีกครั้ง");
    }
  }
  

  useEffect(() => {
    fetchProductList();
  }, []);

  const handleAdd = () => {
    router.push("/new-product");
  };

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
      <Products data={result}/>
      <button 
          onClick={handleAdd}
          className="fixed bottom-20 right-10 bg-[#FC541B] rounded-full p-4 shadow-lg hover:bg-[#FC541B] transition duration-300"
        >
          <Image src={Add} alt="Add" className="w-7 h-7 "/>
        </button>
    </>
    
  );
};

export default Home;

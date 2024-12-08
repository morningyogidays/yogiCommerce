"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import EditIcon from '@/assets/icons/edit.svg';

const EditProduct = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // รับ id จาก query string
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>(''); // สมมุติว่ามีราคา
  const router = useRouter();

  // โหลดข้อมูลสินค้าจาก API หรือที่เก็บข้อมูล
  useEffect(() => {
    if (id) {
      // ทำการ fetch ข้อมูลจาก API ตาม id
      // ตัวอย่าง: fetch(`/api/products/${id}`)
      setName("Example Product Name"); // ข้อมูลตัวอย่าง
      setPrice("฿ 3,800");  // ข้อมูลตัวอย่าง
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ทำการ submit ข้อมูลที่แก้ไข (อาจจะใช้ API หรือจัดการข้อมูลใน state)
    console.log('Data submitted:', { id, name, price });
    router.push(`/home/detail?id=${id}`); // หลังจาก submit กลับไปที่หน้า detail
  };

  return (
    <div className="mt-5 lg:mt-20">
      <nav>
        <ul className="flex space-x-2">
          <li>
            <a href="/" className=" hover:text-gray-300">Home</a>
          </li>
          <li>&gt;</li>
          <li>Edit Product</li>
        </ul>
      </nav>

      <div className="mt-5">
        <h2 className="text-xl font-semibold">Edit Product</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Product Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium">Price</label>
            <input
              id="price"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="mt-4 bg-[#FC541B] text-white py-2 px-4 rounded">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;

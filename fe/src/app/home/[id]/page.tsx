"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import Image from "next/image";
import Edit from '@/assets/icons/edit.svg';
import { useEffect, useRef, useState } from 'react';
import Detail from "@/assets/images/detail1.svg"
import products from '@/app/component/products';
import { NextPage } from 'next';

interface productType {
  _id: string;
  name: string;
  describe: string;
  price: number;
  quantity: number;
  img: string;
  // __v: number;
}

interface Props{
  products: productType[]
  params: { id: string };
}

const DetailProduct:NextPage<Props> =  ({products, params})=> {
  const [product, setProduct] = useState<productType | null>(null);
  const productRef = useRef<productType | null>(null); 
  const router = useRouter();
  const id = params?.id;

  useEffect(() => {
    if (!id) {
      alert("ID not found in params!");
      return;
    }

    const foundProduct = products.find((prod) => prod._id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      alert("Product not found!");
    }
  }, [id, products]);

  const handleEdit = () => {
    if (!product?._id) {
      alert("No product found to edit!");
      return;
    }
    router.push(`/home/${product._id}/edit`);
  };
  

  return (
    <div className='mt-5 lg:mt-20 '>
      <nav>
        <ul className="flex space-x-2">
          <li>
            <a href="/" className=" hover:text-gray-300">Home</a>
          </li>
          <li>&gt;</li>
          <li>{product?.name}</li>
        </ul>
      </nav>

      <div className='mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[480px] md:max-w-max'>
        {product?.img ? (
            <Image
              src={product.img}
              alt="product"
              width={480}
              height={480}
              className="object-cover"
            />
          ) : (
            <div className="w-full h-[480px] bg-gray-200 flex items-center justify-center">
              <p>No Image</p>
            </div>
          )}
        <div className="max-w-full md:max-w-lg">
          <p className='font-md mb-2'>{product?.name}</p>
          <p className='font-xl'>฿ {product?.price.toLocaleString()}</p>
          <p className='font-xs-regular mt-6 overflow-hidden text-ellipsis'> 
            {product?.describe}
          </p>
          <div 
            onClick={handleEdit}
            className='flex border border-[#FC541B] p-4 gap-2 w-24 mt-5 hover:bg-[#fc531b63]'
          >
            <Image src={Edit} alt="Edit" className="w-4 h-4" />
            <p className='font-xs-regular text-[#FC541B]'>Edit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;

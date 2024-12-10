"use client";

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
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
interface Props {
  data: productType[];
}

const Products: NextPage<Props> = ({data}) => {
  const router = useRouter();
  const productRef = useRef<productType | null>(null);
  
  const handleClick = (product: productType) => {
    productRef.current = product;
    router.push(`/home/${product._id}`); 
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {data.map((product) => (
          <div
            key={product._id}
            onClick={() => handleClick(product)}
            className="bg-white border w-[164px] md:w-[234px] h-[287px] md:h-[356px] border-[#D9D9D9] overflow-hidden cursor-pointer"
          >
            <Image
              src={product.img}
              alt={product.name}
              className="w-full h-[165px] md:h-[234px] object-cover"
              style={{ objectFit: 'cover' }}
              />
            <div className="p-8">
              <p className="text-black font-xs-regular mb-2">{product.name}</p>
              <p className="text-black font-s">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

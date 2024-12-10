"use client";

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import Image from "next/image";
import Detail from "@/assets/images/detail1.svg"

interface productType{
  _id: string;
  name: string;
  describe: string;
  price: number;
  quantity: number;
  img: string;
  // __v: number;
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

  const products: productType[] = [
    { _id: "1", name: "Men's Plain Derby Semi Casual Shoes", price: 6500, img: Detail, quantity: 1, describe: "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest." },
    { _id: "2", name: "Men’s Sports Walking Shoes", price: 6500, img: Detail, quantity: 1, describe: "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest." },
    { _id: "3", name: "Men's Cosk Walking,Gym Shoes", price: 6500, img: Detail, quantity: 1, describe: "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest." },
    { _id: "4", name: "Men'sports Walking & Gym Shoes", price: 6500, img: Detail, quantity: 1, describe: "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest." },
    { _id: "5", name: "Men's OXYFIT (N) Walking Shoe", price: 6500, img: Detail, quantity: 1, describe: "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest." },
    { _id: "6", name: "Men's 3392 Stylish Casual Shoes", price: 6500, img: Detail, quantity: 1, describe: "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest." },
    { _id: "7", name: "Men's Milan Best Running Shoes", price: 6500, img: Detail, quantity: 1, describe: "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest." },
    { _id: "8", name: "Men's Creta-12 Men's Running Shoes", price: 6500, img: Detail, quantity: 1, describe: "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest." },
  ];
  
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => handleClick(product)}
            className="bg-white border w-[164px] md:w-[234px] h-[287px] md:h-[356px] border-[#D9D9D9] overflow-hidden cursor-pointer"
          >
            <Image
              src={product.img}
              alt={product.name}
              width={164}
              height={165}
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

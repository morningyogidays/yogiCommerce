"use client";

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

interface Props {}

const Products: NextPage<Props> = () => {
  const router = useRouter();

  const products = [
    { id: 1, name: "Nike Air More Uptempo '96", price: "$29.99", img: "https://via.placeholder.com/300x200" },
    { id: 2, name: "Product 2", price: "$39.99", img: "https://via.placeholder.com/300x200" },
    { id: 3, name: "Product 3", price: "$49.99", img: "https://via.placeholder.com/300x200" },
    { id: 4, name: "Product 4", price: "$59.99", img: "https://via.placeholder.com/300x200" },
    { id: 5, name: "Product 5", price: "$29.99", img: "https://via.placeholder.com/300x200" },
    { id: 6, name: "Product 6", price: "$39.99", img: "https://via.placeholder.com/300x200" },
    { id: 7, name: "Product 7", price: "$49.99", img: "https://via.placeholder.com/300x200" },
    { id: 8, name: "Product 8", price: "$59.99", img: "https://via.placeholder.com/300x200" },
  ];

  const handleClick = (id: number, name: string) => {
    console.log('id', id);
    router.push(`/home/${id}?name=${encodeURIComponent(name)}`); 
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleClick(product.id, product.name)}
            className="bg-white border w-[164px] md:w-[234px] h-[287px] md:h-[356px] border-[#D9D9D9] overflow-hidden cursor-pointer"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[165px] md:h-[234px] object-cover"
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

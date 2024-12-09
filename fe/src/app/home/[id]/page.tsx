"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import Image from "next/image";
import Detail from '@/assets/images/detail1.svg';
import Edit from '@/assets/icons/edit.svg';

const DetailProduct =  ({ params }: { params: { id: string } }) => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const router = useRouter();
  const id = params.id; 
  

  const handleEdit = () => {
    if (!id) {
      console.error("No ID found in the URL");
      return;
    }
    router.push(`/home/${id}/edit`);
};
  

  return (
    <div className='mt-5 lg:mt-20 '>
      <nav>
        <ul className="flex space-x-2">
          <li>
            <a href="/" className=" hover:text-gray-300">Home</a>
          </li>
          <li>&gt;</li>
          <li>{name}</li>
        </ul>
      </nav>

      <div className='mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[480px] md:max-w-max'>
        <Image src={Detail} alt="product" width={480} height={480} className="object-cover" />
        <div className="max-w-full md:max-w-lg">
          <p className='font-md mb-2'>{name}</p>
          <p className='font-xl'>฿ 3,800</p>
          <p className='font-xs-regular mt-6 overflow-hidden text-ellipsis'> 
            More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavour at its finest. Big and loud, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.
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

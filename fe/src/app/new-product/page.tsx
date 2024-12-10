"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Upload from "@/assets/icons/upload.svg";
import React from "react";

const NewProduct = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
    quantity: "",
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.toLowerCase()]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const buffer = Buffer.from(JSON.stringify(formData)).toString("base64");
      const response = await fetch("/api/v1/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          buffer, 
          action: "post",
        }),
      });
  
      if (response.ok) {
        router.push("/home");
      } else {
        const errorData = await response.json();
        console.error("Error adding product:", errorData.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };
  

  return (
    <div className="mt-5 lg:mt-20 w-[500px]">
      <p className="font-md">Add Item</p>

      <div className="mt-5">
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block font-xs-regular">Image</label>
            {formData.image && (
              <Image
                src={formData.image}
                alt="Uploaded Image"
                width={150}
                height={150}
                className="mb-3"
              />
            )}
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            <label
              htmlFor="file-upload"
              className="flex items-center border border-[#FC541B] p-4 gap-2 w-28 mt-5 cursor-pointer hover:rounded-xl"
            >
              <Image src={Upload} alt="Upload" className="w-4 h-4" />
              <p className="font-xs-regular text-[#FC541B]">Upload</p>
            </label>
          </div>

          <div className="mb-4">
            <label className="block font-xs-regular">Name</label>
            <input
              id="Name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-[#D9D9D9] w-full "
            />
          </div>
          <div className="mb-4">
            <label className="block font-xs-regular">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-[#D9D9D9] w-full "
            />
          </div>
          <div className="mb-4">
            <label className="block font-xs-regular ">Quantity</label>
            <input
              id="Quantity"
              type="text"
              value={formData.quantity}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-[#D9D9D9] w-full "
            />
          </div>
          <div className="mb-4">
            <label className="block font-xs-regular">Price</label>
            <input
              id="Price"
              type="text"
              value={formData.price}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-[#D9D9D9] w-full "
            />
          </div>
          <button type="submit" className="mt-4 bg-[#FC541B] text-white py-2 px-4 w-full font-xs-regular ">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;

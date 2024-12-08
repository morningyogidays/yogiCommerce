import React from 'react';

const NewArrivals = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$29.99", img: "https://via.placeholder.com/300x200" },
    { id: 2, name: "Product 2", price: "$39.99", img: "https://via.placeholder.com/300x200" },
    { id: 3, name: "Product 3", price: "$49.99", img: "https://via.placeholder.com/300x200" },
    { id: 4, name: "Product 4", price: "$59.99", img: "https://via.placeholder.com/300x200" },
  ];

  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;

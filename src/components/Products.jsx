import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
    credentials: "include",
  })
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-24 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl text-amber-900 font-light mb-2">Our Collection</h2>
        <p className="text-amber-800">Discover timeless handcrafted Parandas</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p) => (
          <ProductCard key={p._id+p.price} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Products;

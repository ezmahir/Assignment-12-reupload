import { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://product-hunt-server-umber.vercel.app/productsLimited2")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-full rounded-3xl p-7 my-10 shadow-2xl">
      <div className="text-center">
        <p className="text-5xl font-bold mb-16">Products Based on Upvotes</p>
      </div>
      <div className="grid grid-cols-2 space-y-10 space-x-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

import { useEffect, useState } from "react";
import ReportedProduct from "./ReportedProduct/ReportedProduct";

const ReportedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://product-hunt-server-umber.vercel.app/productsReported")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <p className="text-5xl font-bold mb-16">
          All of the Reported Products are here
        </p>
      </div>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-10 w-11/12 mx-auto">
          {products.map((product) => (
            <ReportedProduct
              key={product._id}
              product={product}
            ></ReportedProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportedProducts;

import { useEffect, useState } from "react";
import ProductBigCard from "../ProductBigCard/ProductBigCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("latest");

  const fetchProducts = (order) => {
    let url = "https://product-hunt-server-umber.vercel.app/products";
    if (order === "latest") {
      url =
        "https://product-hunt-server-umber.vercel.app/productsLimited_sortfromlatest";
    } else if (order === "oldest") {
      url =
        "https://product-hunt-server-umber.vercel.app/productsLimited_sortfromoldest";
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts(sortOrder);
  }, [sortOrder]);

  return (
    <div>
      <div className="text-center">
        <p className="text-5xl font-bold mb-16">
          All of the available Products are here
        </p>
      </div>
      <div className="w-full flex justify-center mx-auto mb-10 space-x-10">
        <button
          className="btn btn-accent"
          onClick={() => setSortOrder("oldest")} // Ascending order
        >
          Sort from Oldest to Latest
        </button>
        <button
          className="btn btn-accent"
          onClick={() => setSortOrder("latest")} // Descending order
        >
          Sort from Latest to Oldest
        </button>
      </div>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-10 w-11/12 mx-auto">
          {products.map((product) => (
            <ProductBigCard
              key={product._id}
              product={product}
            ></ProductBigCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

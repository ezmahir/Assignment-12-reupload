import { useContext, useEffect, useState } from "react";
import ProductBigCard from "../ProductBigCard/ProductBigCard";
import { AuthContext } from "../../providers/AuthProvider";

const MyAddedProducts = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://product-hunt-server-umber.vercel.app/myproduct?ownerEmail=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user.email]);
  return (
    <div>
      <div className="text-center">
        <p className="text-5xl font-bold mb-16">
          All Products here are added by you
        </p>
      </div>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-10 w-11/12 mx-auto">
          {products?.map((product) => (
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

export default MyAddedProducts;

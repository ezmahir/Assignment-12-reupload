import { useEffect, useState } from "react";
import ReviewProduct from "../ReviewProduct/ReviewProduct";

const UnderReview = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://product-hunt-server-umber.vercel.app/underReviewProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <p className="text-5xl font-bold mb-16">
          These Products are waiting to be reviewed by a moderator
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 space-y-5 gap-10 w-11/12 mx-auto">
          {products.map((product) => (
            <ReviewProduct key={product._id} product={product}></ReviewProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnderReview;

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { productName, productImageLink, description, upvote } = product;
  return (
    <div className="flex items-center space-x-10 border-2 border-gray-100 shadow-md rounded-3xl p-5">
      <img className="w-20 h-20 rounded-3xl" src={productImageLink} alt="" />
      <div className=" space-y-2">
        <h3 className="uppercase text-2xl text-red-200">
          <i>{productName}</i>
        </h3>
        <p>{description}</p>
        <p>Upvotes: {upvote}</p>
        <Link to="/allproducts">
          <button className="btn btn-accent my-2">Show All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

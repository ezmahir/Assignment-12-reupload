import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { BiUpvote } from "react-icons/bi";

const ProductBigCard = ({ product }) => {
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    productName,
    productImageLink,
    description,
    externalLinkToBuy,
    ownerName,
    upvote,
  } = product;

  const handleReport = (_id) => {
    axiosSecure.patch(`/products/moderator/${_id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You reported this product",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      <figure className="w-full h-60 overflow-hidden">
        <img src={productImageLink} className="object-cover w-full h-full" />
      </figure>
      <div className="card-body text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{productName}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <span className="font-semibold">Upvotes: {upvote}</span>
        </p>
        <p>Owner Name: {ownerName}</p>
        <p>Buy: {externalLinkToBuy}</p>
        <div className="card-actions flex flex-col mt-5 mb-2">
          <div className="flex justify-evenly w-full">
            <Link to={`/products/${_id}`}>
              <button className="btn btn-primary px-6 py-2 rounded-lg text-white">
                View Details
              </button>
            </Link>

            <button
              onClick={() => handleReport(_id)}
              className="btn btn-error px-6 py-2 rounded-lg text-white"
            >
              Report
            </button>
          </div>
          <div className="flex justify-center w-full my-2">
            <Link to={`/products/${_id}`}>
              <button className="btn btn-success">
                <BiUpvote /> Upvote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBigCard;

import { useContext } from "react";
import { BiUpvote } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  // fetch(`https://product-hunt-server-umber.vercel.app/products/${_id}`)
  const product = useLoaderData();
  const {
    _id,
    productName,
    productImageLink,
    description,
    externalLinkToBuy,
    ownerName,
    upvote,
  } = product;
  const { user } = useContext(AuthContext);
  console.log(product);
  const handleUpvote = () => {
    const upvote = {
      upvote_id: _id,
      user_email: user.email,
    };

    fetch(`https://product-hunt-server-umber.vercel.app/products/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upvote),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          window.location.reload();
        }
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <img src={productImageLink} className="w-full h-96 rounded-3xl" />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {productName}
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Context:</span> {description}
          </p>

          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Created By:</span> {ownerName}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Upvote Count:</span> {upvote}
          </p>

          <p className="text-gray-600 text-lg mb-6">
            <span className="font-semibold">External Link:</span>{" "}
            {externalLinkToBuy}
          </p>
          {/* <p className="text-gray-600 text-lg mb-6">
            <span className="font-semibold">Likes:</span> {like_count}
          </p> */}
          <div className="flex justify-center">
            {/* <Link to={`/artifactLike/${_id}`}>
              <button className="btn btn-accent text-white font-bold px-8 py-3 rounded-full hover:bg-accent-focus">
                Upvote It!
              </button>
            </Link> */}
            <button
              onClick={() => handleUpvote(_id)}
              className="btn btn-success"
            >
              <BiUpvote /> Upvote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const AddProducts = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData.entries());
    newProduct.upvote = 0;
    newProduct.reported = false;

    console.log(newProduct);

    fetch("https://product-hunt-server-umber.vercel.app/underReviewProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Product has been sent to review",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/allproducts");
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <div className="text-3xl font-bold text-center text-gray-800 mb-6">
          <h2>Post a New Product</h2>
        </div>
        <form onSubmit={handleAddProduct} className="space-y-6">
          {/* Product Name */}
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Enter Your Product Name"
              className="input input-bordered w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Product Image */}
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              Product Image URL
            </label>
            <input
              type="text"
              name="productImageLink"
              placeholder="Product Image URL"
              className="input input-bordered w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="textarea textarea-bordered w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Description"
              name="description"
              required
            ></textarea>
          </div>

          {/* External Link */}
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              External Link to Buy
            </label>
            <input
              type="text"
              name="externalLinkToBuy"
              placeholder="External Link"
              className="input input-bordered w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Adder Name */}
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              Adder Name
            </label>
            <input
              defaultValue={user?.displayName}
              type="text"
              name="ownerName"
              placeholder="Adder Name"
              className="input input-bordered w-full border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              required
              readOnly
            />
          </div>

          {/* Adder Email */}
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              Adder Email
            </label>
            <input
              defaultValue={user?.email}
              type="text"
              name="ownerEmail"
              placeholder="Adder Email"
              className="input input-bordered w-full border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              required
              readOnly
            />
          </div>

          {/* Adder Photo */}
          <div className="form-control">
            <label className="label font-medium text-gray-700">
              Adder Photo
            </label>
            <input
              defaultValue={user?.photoURL}
              type="text"
              name="ownerPhoto"
              placeholder="Adder Photo"
              className="input input-bordered w-full border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              required
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-medium">
              Add this Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;

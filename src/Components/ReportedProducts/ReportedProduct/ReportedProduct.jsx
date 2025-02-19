import Swal from "sweetalert2";

const ReportedProduct = ({ product }) => {
  const {
    _id,
    reported,
    productName,
    productImageLink,
    description,
    externalLinkToBuy,
    ownerName,
    ownerEmail,
    ownerPhoto,
    upvote,
  } = product;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://product-hunt-server-umber.vercel.app/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
              window.location.reload();
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div className="card bg-white rounded-lg overflow-hidden w-full border-2 border-gray-100 shadow-2xl">
        <figure className="w-full h-60 overflow-hidden">
          <img src={productImageLink} className="object-cover w-full h-full" />
        </figure>
        <div className="card-body text-center p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Product Name: {productName}
          </h2>
          <p className="text-gray-600 mb-4">
            <span className="text-2xl">Description:</span> {description}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            <span className="font-semibold">Upvotes: {upvote}</span>
          </p>
          <p>Owner Name: {ownerName}</p>
          <p>Owner Email: {ownerEmail}</p>
          <div className="flex justify-center">
            <img className="rounded-3xl w-28 h-28" src={ownerPhoto} alt="" />
          </div>
          <p>You can Buy From: {externalLinkToBuy}</p>
          <div className="card-actions justify-center">
            <button onClick={() => handleDelete(_id)} className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportedProduct;

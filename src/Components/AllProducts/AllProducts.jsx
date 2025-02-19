import { useEffect, useState } from "react";
import ProductBigCard from "../ProductBigCard/ProductBigCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://product-hunt-server-umber.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <p className="text-5xl font-bold mb-16">
          All of the available Products are here
        </p>
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

// const AllArtifacts = () => {
//     const [artifacts, setArtifacts] = useState([]);
//     useEffect(() => {
//       fetch(
//         "https://historical-artifacts-tracker-server-teal.vercel.app/artifacts"
//       )
//         .then((res) => res.json())
//         .then((data) => setArtifacts(data));
//     }, []);
//     return (
//       <div>
//         <Helmet>
//           <title>Historical Art || All Artifacts</title>
//         </Helmet>
//         <div className="text-center">
//           <p className="text-5xl font-bold mb-16">
//             All of the available Artifacts are here
//           </p>
//         </div>
//         {/* Artifacts Section */}
//         <div>
//           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-10 w-11/12 mx-auto">
//             {artifacts.map((artifact) => (
//               <ArtifactCard key={artifact._id} artifact={artifact}></ArtifactCard>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

// const ArtifactCard = ({ artifact }) => {
//     const { _id, title, artifact_image, context, like_count } = artifact;

//     return (
//       <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
//         <figure className="w-full h-60 overflow-hidden">
//           <img src={artifact_image} className="object-cover w-full h-full" />
//         </figure>
//         <div className="card-body text-center p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
//           <p className="text-gray-600 mb-4">{context}</p>
//           <p className="text-sm text-gray-500 mb-4">
//             <span className="font-semibold">Likes:</span> {like_count}
//           </p>
//           <div className="card-actions justify-center">
//             <Link to={`/artifacts/${_id}`}>
//               <button className="btn btn-primary px-6 py-2 rounded-lg text-white">
//                 View Details
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   };

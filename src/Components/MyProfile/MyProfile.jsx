import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log("This", user);
  return (
    <>
      <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
        <figure className="w-full h-60 overflow-hidden">
          <img
            src={user?.photoURL}
            className="object-cover w-1/2 h-1/2 rounded-3xl"
          />
        </figure>
        <div className="card-body text-center p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {user?.displayName}
          </h2>

          <p>Email: {user?.email}</p>
          <p>Membership: Not Available right now</p>
        </div>
      </div>
    </>
  );
};

export default MyProfile;

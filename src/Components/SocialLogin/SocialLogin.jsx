import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((result) => {
          console.log(result.data);
          navigate("/");
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <button onClick={handleGoogleLogin} className="btn btn-outline">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;

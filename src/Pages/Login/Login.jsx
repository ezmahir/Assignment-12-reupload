import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  const handlLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log("Logged in", result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        alert("Email and Password does not match");
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handlLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <p>
                New User here? If yes, do{" "}
                <span className="text-blue-500 underline">
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </div>
            <div className="form-control mt-6 flex justify-center">
              <button className="btn btn-primary rounded-3xl w-full">
                Login
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <p>You can log in with</p>
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import navImg from "../../../assets/icons8-duck-hunt-96.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Signed Out");
      })
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allproducts">All Products</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="dashboard/addproducts">Add Products</NavLink>
          </li>
          <li>
            <NavLink to="dashboard/myaddedproducts">My Added Products</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar w-full mx-auto mt-5 bg-lime-200 rounded-3xl p-3 mb-10 sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <button className="btn btn-ghost text-3xl rounded-3xl">
            <img className="w-10 h-10 mr-2" src={navImg} alt="" />
            <i>Product Hunter</i>
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-x-4">
        {user ? (
          <>
            <h1 className="mr-2 text-2xl">
              <i>Welcome Back, {user.displayName}!!</i>
            </h1>
            <div className="dropdown dropdown-hover">
              <img
                className="w-10 h-10 rounded-full mr-5"
                src={user.photoURL}
                alt=""
              />
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <button className="btn btn-outline" onClick={handleSignOut}>
                  Sign Out
                </button>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-outline mr-1">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline mr-2">Register</button>
            </Link>
            <Link to="/login">
              <img
                className="w-10 h-10 rounded-full"
                src="https://img.icons8.com/?size=100&id=zj0HDoXpmTPF&format=png&color=000000"
                alt=""
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

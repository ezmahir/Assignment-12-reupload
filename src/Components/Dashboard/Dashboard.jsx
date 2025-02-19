import { NavLink, Outlet } from "react-router-dom";
import { ImCart } from "react-icons/im";
import {
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaVoicemail,
} from "react-icons/fa";
import {
  MdAddCircle,
  MdOutlineRateReview,
  MdOutlineReportGmailerrorred,
  MdOutlineReviews,
  MdPersonAddAlt1,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import useAdmin from "../../Hooks/useAdmin";
import useModerator from "../../Hooks/useModerator";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  //   const [cart] = useCart();

  // Todo: get isAdmin Value from the Db
  //   const [isAdmin] = useAdmin();
  const [isAdmin] = useAdmin();
  const [isModerator] = useModerator();
  return (
    <div className="flex">
      {/* Dashboard Side Bar */}
      <div className="w-64 min-h-screen bg-lime-400 rounded-4xl p-5">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/myprofile">
              <CgProfile /> My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addproducts">
              <MdAddCircle /> Add Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myaddedproducts">
              <MdPersonAddAlt1 /> My Added Products
            </NavLink>
          </li>
          <div className="divider"></div>

          {/* Admin er jonno */}

          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/users">
                  <RiUserSettingsLine /> Show All Users
                </NavLink>
              </li>
            </>
          )}

          {isModerator && (
            <>
              <li>
                <NavLink to="/dashboard/underreview">
                  <MdOutlineRateReview /> Products Under Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reportedproducts">
                  <MdOutlineReportGmailerrorred /> Reported Products
                </NavLink>
              </li>
            </>
          )}

          {/* {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaCalendar></FaCalendar> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <MdOutlineReviews /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <ImCart /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaList></FaList> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdOutlineReviews /> Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <ImCart /> My Cart: {cart.length}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList> My Bookings
                </NavLink>
              </li>
            </>
          )} */}
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

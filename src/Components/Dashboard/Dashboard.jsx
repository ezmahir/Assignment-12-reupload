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

const Dashboard = () => {
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

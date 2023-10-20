import { Link, useLocation } from "react-router-dom";
import {
  FaUser,
  FaTachometerAlt,
  FaBook,
  FaCalendarAlt,
  FaInbox,
  FaClock,
  FaTv,
  FaSignOutAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import "./index.css";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];
  const linksToIconsMap = {
    Account: <FaUser className="fs-1 text" />,
    Dashboard: <FaTachometerAlt className="fs-1 text" />,
    Courses: <FaBook className="fs-1 text" />,
    Calendar: <FaCalendarAlt className="fs-1 text" />,
    Inbox: <FaInbox className="fs-1 text" />,
    History: <FaClock className="fs-1 text" />,
    Studio: <FaTv className="fs-1 text" />,
    Commons: <FaSignOutAlt className="fs-1 text" />,
    Help: <FaQuestionCircle className="fs-1 text" />,
  };
  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation list-group" style={{}}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item text-center p-4 ${
            pathname.includes(link) && "active"
          }`}
        >
          {linksToIconsMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;

import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="list-group mt-2">
      <Link
        to="/project/signin"
        className={`list-group-item nav-link ${pathname.includes("signin") ? "active" : ""}`}
      >
        Sign In
      </Link>
      <Link
        to="/project/account"
        className={`list-group-item nav-link ${pathname.includes("account") ? "active" : ""}`}
      >
        Account
      </Link>
      <Link
        to="/project/signup"
        className={`list-group-item nav-link ${pathname.includes("signup") ? "active" : ""}`}
      >
        Sign Up
      </Link>
    </nav>
  );
}
export default Nav;
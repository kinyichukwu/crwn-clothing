import { Link, Outlet } from "react-router-dom";
import './navigaton.scss'
import { ReactComponent as CrwnLogo } from "../../crown.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
      <Link className="logo-container" to="/">
      <CrwnLogo className="logo"/>
          </Link>
        
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>

          <Link className="nav-link" to="/sign-in">
            Sign-in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

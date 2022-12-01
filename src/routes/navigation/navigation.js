import { Link, Outlet } from "react-router-dom";
import "./navigaton.scss";
import { ReactComponent as CrwnLogo } from "../../crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser , "This is current user");
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          {currentUser ? (
            
            <span className="nav-link">SIGN OUT</span>
            
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

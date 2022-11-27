import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
          <span className='logo'>Booking App</span>
        </Link>

        {user ? (
          <div className='logoutUser'>
            <span>{user.username}</span>
            <button className='logout' onClick={handleClick}>
              Logout
            </button>
          </div>
        ) : (
          <div className='navItems'>
            <button className='navButton'>Register</button>
            <Link to='/login'>
              <button className='navButton'>Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

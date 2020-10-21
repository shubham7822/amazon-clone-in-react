import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import Login from "./Login";
function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    auth.signOut();
  };
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header_logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
      </Link>

      <div className='header_Search'>
        <input type='text' className='header_SearhInput' />
        <SearchIcon className='header_SearchIcon' />
      </div>

      <div className='header_nav'>
        <Link to={!user && "/login"} className='header_link'>
          <div onClick={login} className='header_option'>
            <span className='header_optionLineOne'>
              hello,<p className='Header_email'>{user?.email}</p>
            </span>
            <span className='header_optionLineTwo'>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_option header_option_mediaquery'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'> &orders</span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_option header_option_mediaquery'>
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className='header_link'>
          <div className='header_optionBucket'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_BasketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

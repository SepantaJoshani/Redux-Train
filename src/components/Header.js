import {  useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Header.module.css";


const Header = () => {
const showAuth = useSelector(state => state.auth.isAuth)
const dispatch = useDispatch()

const logOutHandler = ()=>{
  dispatch(authActions.logout())
}


  const headerContent = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logOutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {showAuth &&headerContent}
    </header>
  );
};

export default Header;

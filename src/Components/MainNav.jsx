import NavLogo from "../assets/img/argentBankLogo.png";
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { disconnectUser } from "../store";
import { useDispatch } from "react-redux";

function MainNav() {

  let dispatch = useDispatch();
  let loggedIn = useSelector((state) => state.userLog.loggedIn);
  let user =  useSelector((state) => state.userLog.currentUser.firstName)  

  function logOut(){
    localStorage.clear();
    dispatch(disconnectUser())
  }

  if(loggedIn) {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo"><img src={NavLogo} className="main-nav-logo-image" alt="Argent Bank Logo"/>   <h1 className="sr-only">Argent Bank</h1></NavLink>   
      <div className="nav-links-container">
        <NavLink to="/profile" className="main-nav-item" href="./user.html">
            <i className="fa fa-user-circle"></i>
            {user ? user : ""} 
        </NavLink>
        <NavLink to="/" className="main-nav-item" 
        onClick={logOut}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
        
      </div>
    </nav>
  )
}
  else {
    return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo"> <img src={NavLogo} className="main-nav-logo-image" alt="Argent Bank Logo"/></NavLink>     
      <NavLink to="/login"  className="main-nav-item"><i className="fa fa-user-circle"></i> Sign In</NavLink>     
    </nav>
    )
  }
}
  
export default MainNav;
  
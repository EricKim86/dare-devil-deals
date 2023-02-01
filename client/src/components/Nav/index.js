import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const styles = {
  container: {
    color: 'white',
    textAlign: 'left'
  },
}

function Nav() {

  function showNavigation() {
    // if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/">
              Home
            </Link>
            <li className="mx-1">
            <Link to="/Profile">
              Profile
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/Feed">
              Feed
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/Shop">
              Shop
            </Link>
          </li>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
  //   } else {
  //     return (
  //       <ul className="flex-row">
  //         <li className="mx-1">
  //           <Link to="/signup">
  //             Signup
  //           </Link>
  //         </li>
  //         <li className="mx-1">
  //           <Link to="/login">
  //             Login
  //           </Link>
  //         </li>
  //       </ul>
  //     );
    // }
  }

  return (
    <header style={styles.container} className="flex-row px-1">
      <h1>Dare Devil Deals</h1>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;

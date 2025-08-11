import { NavLink } from "react-router-dom";

import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <nav>
      <NavLink className={styles.navlink} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.navlink} to="/login">
        Login
      </NavLink>
    </nav>
  );
}

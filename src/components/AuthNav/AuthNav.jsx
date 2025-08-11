import { NavLink } from "react-router-dom";

import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <nav>
      <NavLink className={styles.navlink} to="/register">
        Реєстрація
      </NavLink>
      <NavLink className={styles.navlink} to="/login">
        Вхід
      </NavLink>
    </nav>
  );
}

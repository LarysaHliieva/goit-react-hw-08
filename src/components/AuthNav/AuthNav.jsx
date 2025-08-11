import { NavLink } from "react-router-dom";

import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <nav>
      <NavLink className={css.navlink} to="/register">
        Реєстрація
      </NavLink>
      <NavLink className={css.navlink} to="/login">
        Вхід
      </NavLink>
    </nav>
  );
}

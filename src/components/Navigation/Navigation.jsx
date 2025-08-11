import { NavLink } from "react-router-dom";

import { TbDeviceLandlinePhone } from "react-icons/tb";

import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink className={css.navlink} to="/">
        <TbDeviceLandlinePhone size="30px" />
      </NavLink>
      <NavLink className={css.navlink} to="/phonebook">
        Phonebook
      </NavLink>
    </nav>
  );
}

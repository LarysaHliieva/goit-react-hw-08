import { NavLink } from "react-router-dom";

import { TbDeviceLandlinePhone } from "react-icons/tb";

import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink className={styles.navlink} to="/">
        <TbDeviceLandlinePhone size="30px" />
      </NavLink>
      <NavLink className={styles.navlink} to="/contacts">
        Phonebook
      </NavLink>
      examplepwd12345
    </nav>
  );
}

import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import styles from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
}

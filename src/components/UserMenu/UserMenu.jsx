import Button from "../Button/Button";

import styles from "./UserMenu.module.css";

export default function UserMenu() {
  return (
    <div>
      <p className={styles.username}>username</p>
      <Button text="Logout"></Button>
    </div>
  );
}

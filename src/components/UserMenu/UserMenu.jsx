import { useSelector, useDispatch } from "react-redux";

import Button from "../Button/Button";

import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const user = useSelector(selectUser);
  return (
    <div>
      <p className={styles.username}>{user.name}</p>
      <Button text="Logout" onClick={handleLogout}></Button>
    </div>
  );
}

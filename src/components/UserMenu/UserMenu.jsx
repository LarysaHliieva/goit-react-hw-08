import Button from "../Button/Button";

import css from "./UserMenu.module.css";

export default function UserMenu() {
  return (
    <div>
      <p className={css.username}>username</p>
      <Button text="Вихід"></Button>
    </div>
  );
}

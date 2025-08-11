import AppBar from "../AppBar/AppBar";
import css from "./Loyout.module.css";

export default function Loyout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}

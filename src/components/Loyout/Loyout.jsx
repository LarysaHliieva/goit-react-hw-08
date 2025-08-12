import AppBar from "../AppBar/AppBar";
import NoticeError from "../NoticeError/NoticeError";

import styles from "./Loyout.module.css";

export default function Loyout({ children }) {
  return (
    <div className={styles.container}>
      <AppBar />
      {children}
    </div>
  );
}

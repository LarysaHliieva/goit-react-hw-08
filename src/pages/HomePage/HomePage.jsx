import { TbDeviceLandlinePhone } from "react-icons/tb";

import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1>Phonebook</h1>
      <h3>
        Keep your contacts, find the right people, and always have your
        phonebook at hand.
      </h3>
      <TbDeviceLandlinePhone size="100px" />
    </div>
  );
}

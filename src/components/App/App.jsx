import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import NoticeError from "../NoticeError/NoticeError";

import { fetchContacts } from "../../redux/contacts/operations";

import { selectLoading } from "../../redux/contacts/selectors";

import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <CircularProgress color="success" />}
      <NoticeError />
      <ContactList />
    </div>
  );
}

export default App;

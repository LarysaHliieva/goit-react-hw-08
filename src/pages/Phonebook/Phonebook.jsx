import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import NoticeError from "../../components/NoticeError/NoticeError";
import ContactList from "../../components/ContactList/ContactList";

import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

export default function Phonebook() {
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {loading && <CircularProgress color="success" />}
      <NoticeError />
      <ContactList />
    </div>
  );
}

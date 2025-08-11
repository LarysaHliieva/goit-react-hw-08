import { Routes, Route } from "react-router-dom";

import Loyout from "../Loyout/Loyout";
import HomePage from "../../pages/HomePage/HomePage";
import Phonebook from "../../pages/Phonebook/Phonebook";
import Register from "../../pages/RegistrationPage/RegistrationPage";
import Login from "../../pages/LoginPage/LoginPage";

function App() {
  return (
    <Loyout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Loyout>
  );
}

export default App;

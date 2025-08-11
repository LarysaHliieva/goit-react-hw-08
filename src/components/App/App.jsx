import { Routes, Route } from "react-router-dom";

import Loyout from "../Loyout/Loyout";
import HomePage from "../../pages/HomePage/HomePage";
import PhonebookPage from "../../pages/PhonebookPage/PhonebookPage";
import RegisterPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {
  return (
    <Loyout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route
          path="/contacts"
          element={<PrivateRoute component={<PhonebookPage />} />}
        /> */}
        <Route path="/contacts" element={<PhonebookPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Loyout>
  );
}

export default App;

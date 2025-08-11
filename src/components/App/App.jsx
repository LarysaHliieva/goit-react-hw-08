import { Routes, Route } from "react-router-dom";

import Loyout from "../Loyout/Loyout";
import HomePage from "../../pages/HomePage/HomePage";
import Phonebook from "../../pages/Phonebook/Phonebook";

function App() {
  return (
    <Loyout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Routes>
    </Loyout>
  );
}

export default App;

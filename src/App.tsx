import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserNotes from "./components/_UserNotes";
import NameInput from "./components/_NameInput";
import EditNote from "./components/_EditNote";
import CreateNote from "./components/_CreateNote";

import "./scss/base.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserNotes />} />
        <Route path="/name" element={<NameInput />} />
        <Route path="/edit" element={<EditNote />} />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
    </Router>
  );
}

export default App;

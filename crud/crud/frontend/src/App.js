import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createbook from "./component/Createbook";
import Allbooks from "./component/Allbooks";
import Updatebook from "./component/Updatebook";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Createbook />} />
          <Route exact path="/books" element={<Allbooks />} />
          <Route exact path="/updatebook/:bid" element={<Updatebook />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

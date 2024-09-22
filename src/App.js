import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./Create";
import HealthCareServices from "./HealthCareServices";
import Update from "./Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create />}></Route>
        <Route exact path="/read" element={<HealthCareServices />}></Route>
        <Route exact path="/update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

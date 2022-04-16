import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddData from "./Components/AddData";
import Header from "./Components/Header";
import Home from "./Components/Home";
import UpdateData from "./Components/UpdateData";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/AddData" element={<AddData />} />
          <Route path="/update" element={<UpdateData />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

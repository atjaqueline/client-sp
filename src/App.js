import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Overview from "./Overview";
import Update from "./Update";
import UpdateDetails from "./UpdateDetails";
import PreviousWeek from "./PreviousWeek";
import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";

function App({ id }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/signup" element={<SignupForm />}></Route>
            <Route path="/overview" element={<Overview />}></Route>
            <Route path="/update" element={<Update />}></Route>
            <Route path="/details" element={<UpdateDetails />}></Route>
            <Route path="/previous" element={<PreviousWeek />}></Route>
          </Routes>
        </div>
        <p>
          Disclaimer: All the information contained in this project is entirely
          fabricated.
        </p>
      </BrowserRouter>
    </div>
  );
}

export default App;

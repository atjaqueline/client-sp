import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Overview from "./Overview";
import Update from "./Update";


function App({ id }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="wrapper">
          

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/overview" element={<Overview />}></Route>
            <Route path="/update" element={<Update />}></Route>
            {/* <Route path="updates/:id" element={<Updates />} id={id} />
             */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

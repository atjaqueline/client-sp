import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Updates from "./Updates";


function App({ id }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="wrapper">
          

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/updates" element={<Updates />}></Route>
            {/* <Route path="updates/:id" element={<Updates />} id={id} />
             */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

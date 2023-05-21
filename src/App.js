import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from "./messages";
import MessagesList from "./messagesList";
import Home from "./Home";


function App({ id }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="wrapper">
          

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="messages/:id" element={<Messages />} id={id} />
            <Route path="messages" element={<MessagesList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

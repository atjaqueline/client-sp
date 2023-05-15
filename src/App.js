import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from "./messages";
import MessagesList from "./messagesList";
import NewMessageForm from "./newMessageForm";
import Home from "./Home";
import Sidebar from './Sidebar';

function App({id}) {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <div className="wrapper">
      
      <Sidebar/>
     
      <Routes>
         <Route path="/" element={<Home />}></Route>
          <Route path="messages/:id" element={<Messages />} id={id}/>
          <Route path="messages" element={<MessagesList />} />
      </Routes>
      </div>
    </BrowserRouter> 
    </div>
    
  );
}

export default App;

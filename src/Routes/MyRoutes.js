import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from "../components/messages";
import MessagesList from "../components/messagesList";
import NewMessageForm from "../components/newMessageForm";

function MyRoutes() {
return (
    <BrowserRouter>
      <Routes>
          <Route path="messages/${id}" element={<Messages />} />
          <Route path="messages" element={<NewMessageForm />} />
          <Route path="allmessages" element={<MessagesList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
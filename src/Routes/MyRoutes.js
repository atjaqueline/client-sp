import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from "../messages";
import MessagesList from "../messagesList";
import NewMessageForm from "../newMessageForm";

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
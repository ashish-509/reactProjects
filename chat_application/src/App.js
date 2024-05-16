import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="5528cc35-09fd-4b17-aba6-35f9d9176e94"
        userName="localStorage.getItem('username')"
        userSecret="localStorage.getItem('password')"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />

    </>
  );
};

export default App;

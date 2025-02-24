
import React from "react";
import Chatbot from "react-chatbot-kit";

import MessageParser from "./MessageParser"
import config from "./Config";
import ActionProvider from "./ActionProvider";

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
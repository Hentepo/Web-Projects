// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./Components/BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Type help for available commands`)],
  botName: "BG3-Bot",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />
  }
}

export default config
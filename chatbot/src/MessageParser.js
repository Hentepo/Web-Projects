// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)

      const reply = message.toLowerCase()
      
      if (reply.includes("hello")) {
        this.actionProvider.helloWorldHandler()
      }

      if (reply.includes("help")) {
        this.actionProvider.helpHandler()
      }
    }
  }
  
  export default MessageParser;
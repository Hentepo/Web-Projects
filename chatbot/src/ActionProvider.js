// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   helloWorldHandler = () => {
    const message = this.createChatBotMessage("Hello, from chatbot");
    this.setChatBotMessage(message);
   }

   setChatBotMessage = (message) => {
    this.setState(state => ({...state, messages: [...state.messages, message]}))
   }

 }
 
 export default ActionProvider;
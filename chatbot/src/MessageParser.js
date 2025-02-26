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
      if (reply.includes("barbarian")) {
        this.actionProvider.barbarianHandler()
      }
      if (reply.includes("bard")) {
        this.actionProvider.bardHandler()
      }
      if (reply.includes("cleric")) {
        this.actionProvider.clericHandler()
      }
      if (reply.includes("druid")) {
        this.actionProvider.druidHandler()
      }
      if (reply.includes("fighter")) {
        this.actionProvider.fighterHandler()
      }
      if (reply.includes("monk")) {
        this.actionProvider.monkHandler()
      }
      if (reply.includes("paladin")) {
        this.actionProvider.paladinHandler()
      }
      if (reply.includes("ranger")) {
        this.actionProvider.rangerHandler()
      }
      if (reply.includes("rogue")) {
        this.actionProvider.rogueHandler()
      }
      if (reply.includes("sorcerer")) {
        this.actionProvider.sorcererHandler()
      }
      if (reply.includes("warlock")) {
        this.actionProvider.warlockHandler()
      }
      if (reply.includes("wizard")) {
        this.actionProvider.wizardHandler()
      }
    }
  }
  
  export default MessageParser;
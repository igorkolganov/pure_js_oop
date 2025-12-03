import { ChatRoom } from "./Mediator.js"
import { Participant } from "./Participant.js"

let chatroom = new ChatRoom()

let mike = new Participant('Mike')
let jimm = new Participant('Jimm')
let jane = new Participant('Jane')

chatroom.register(mike)
chatroom.register(jimm)
chatroom.register(jane)

mike.send("Hello Jane! Do you go out with me?")
mike.send("Something I need to descuss with you.")
jimm.send("Hey, you send to all that messages.", mike)
jane.send("Common Mike!")

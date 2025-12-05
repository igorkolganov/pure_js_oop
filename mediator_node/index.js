import fs from 'fs'
import os from 'os'

import {ChatRoom} from './src/mediator/Mediator.js'
import {Participant} from './src/Participant.js'

let chatRoom = new ChatRoom()

let mike = new Participant('Mike', 'chats/mike.txt', fs)
let jimm = new Participant('Jimm', 'chats/jimm.txt', fs)
let jane = new Participant('Jane', 'chats/jane.txt', fs)

chatRoom.register(mike)
chatRoom.register(jimm)
chatRoom.register(jane)

mike.send("Hello, Jane! Do you go out with me?" + os.EOL)
mike.send("Something I need to discuss with you." + os.EOL)
jimm.send("Hey, you send to all that message." + os.EOL, mike)
jane.send("Common Mike!" + os.EOL)


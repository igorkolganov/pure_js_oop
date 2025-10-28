class Participant{
    constructor(name){
        this.name = name
        this.chatroom = null
    }

    send(message, to){
        this.chatroom.send(message, this, to)
    }

    receive(message, from){
        console.log(from.name + " to " + this.name + ": " + message)
    }
}

class Chatroom{
    participants = {}

    constructor(){}

    register(participant){
        this.participants[participant.name] = participant
        participant.chatroom = this
    }

    send(message, from, to){
        if(to){
            to.receive(message, from)
        }else{
            for(const key in this.participants){
                if(this.participants[key] !== from){
                    this.participants[key].receive(message, from)
                }
            }
        }
    }
}

let mike = new Participant('Mike')
let jimm = new Participant('Jimm')
let jane = new Participant('Jane')

let chatroom = new Chatroom()
chatroom.register(mike)
chatroom.register(jimm)
chatroom.register(jane)

mike.send("Hello Jane! Do you go out with me?")
mike.send("Something I need to descuss with you.")
jimm.send("Hey, you send to all that messages.", mike)
jane.send("Common Mike!")
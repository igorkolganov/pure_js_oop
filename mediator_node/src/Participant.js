class Participant{
    constructor(name, path, fs){
        this.name = name
        this.path = path
        this.fs = fs
        this.chatroom = null
    }

    send(message, to){
        this.chatroom.send(message, this, to)
    }

    receive(message, from){
        this.fs.appendFileSync(this.path, "(" + new Date().toLocaleString() + ") From: " + from.name + ". Message: " + message, 'utf8')
    }
}
export {Participant}

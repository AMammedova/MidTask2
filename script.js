

// Message class
class Message {
    constructor(userName, message) {
        this.userName = userName;
        this.date = Date.now();
        this.message = message;
    }
    getTime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`;
    }
    toString() {
        return (`Author: ${this.userName}, Message: ${this.message}, Time: ${this.getTime()}`);
    }
}

// Messenger class
class Messenger {
    list = [];
    send(userName, message) {
        let newMessage = new Message(userName, message)
        this.list.push(newMessage);
    };
    show_history() {
        this.list.forEach(x => {
            console.log(x.toString())
        })
    }
}

// Using
let obj = new Messenger()
obj.send('Aysel', 'First Message');
obj.send('Aysun', 'Second Message');
obj.send('Vusal', 'Third Message');
obj.show_history()
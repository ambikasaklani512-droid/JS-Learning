//observer pattern
class YouChannel {
    constructor(name) {
        this.name = name;
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
        //user ka update func chalayenge
        user.update(`${user.name}, you have subscribed the ${this.name} channel`);
    }

    unsubscribe(user) {
        if (this.subscribers.includes(user)) {
            //return honge wo elements array me jo subsscribed h or unsubscribed wale remove honge
            this.subscribers = this.subscribers.filter(sub => sub !== user);
            user.update(`${user.name}, you have unsubscribed the ${this.name} channel`);
        }
        else{
            console.error("ERROR, user has not subscribed the channel");
        }

    }

    notify() {
        this.subscribers.forEach((sub) => {
            sub.update("new video is uploaded!");
        })
    }

    show() {
        console.log(this.subscribers);

    }
}

class User {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(data);
    }
}

let ambis = new YouChannel("ambis");

let user1 = new User("ambika");
let user2 = new User("trisha");
let user3 = new User("nisaa");

ambis.subscribe(user1);
ambis.subscribe(user2);
ambis.subscribe(user3);
ambis.unsubscribe(user2);

ambis.notify();

ambis.show();
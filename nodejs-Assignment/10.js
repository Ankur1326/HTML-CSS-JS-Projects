const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

const subscribeMessage = (channelName) => {
    console.log(`Thanks for subscribing to ${channelName}`);
}

eventEmitter.addListener("subscribe", subscribeMessage)

eventEmitter.emit("subscribe", "College wallah")

console.log(`The default maximum num=mber of event litners are: ${eventEmitter.getMaxListeners()}`);

eventEmitter.setMaxListeners(5)

console.log(`The updated maximum of event listners are: ${eventEmitter.getMaxListeners()}`);
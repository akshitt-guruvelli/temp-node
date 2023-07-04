const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);



//return the system up time in seconds (amount of time the system is switched on)
console.log(`The System Uptime is ${os.uptime()} seconds`)



//return the current os properties
const currentOs = {
    name: os.type(),
    release: os.release(),
    total_memory: os.totalmem(),
    free_memory: os.freemem()
}
console.log(currentOs);
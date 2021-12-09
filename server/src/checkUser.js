/**
 * myFtp by MiloAnton
 * Function to check if a user submitted by client is valid 
 */

export function checkUser(name, allSockets, socket) {
    let answer = "User does not exist";
    const fs = require('fs');
    let rawdata = fs.readFileSync(`${__dirname}/../user.json`);
    let user = JSON.parse(rawdata);
    if (user[name] != null) {
        allSockets[socket.uid] = name;
        answer = "331 User " + name + " is valid, please precise PASS \n\r"
    }
    return answer;
}

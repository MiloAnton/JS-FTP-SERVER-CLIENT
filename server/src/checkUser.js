/**
 * myFtp by MiloAnton
 * Function to check if a user submitted by client is valid 
 */

 import fs from 'fs';

export function checkUser(name, allSockets, socket) {
    try {
        let answer = "User does not exist";
        let rawdata = fs.readFileSync(`${__dirname}/../user.json`);
        let user = JSON.parse(rawdata);
        if (user[name] != null) {
            allSockets[socket.uid] = name;
            answer = "331 User " + name + " is valid, please precise PASS \n\r"
            console.log("Username from client is valid\r\n");
        }
        return answer;
    } catch (e) {
        console.log(e);
    }
}
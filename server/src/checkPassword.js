/**
 * myFtp by MiloAnton
 * Function to check if a password submitted by client is valid and corresponds to current user
 */

import fs from 'fs';

export function checkPasswd(password, allSockets, socket) {
    try {
        let passw = "430 Authentication failed\r\n";
        let rawdata = fs.readFileSync(`${__dirname}/../user.json`);
        let bank = JSON.parse(rawdata);
        if (bank[allSockets[socket.uid]]["password"] == password) {
            passw = "230 Password corresponds, authentication was a success !\r\n"
            console.log("User identified with correct password\r\n");
        }
        return passw;
    } catch (e) {
        console.log(e);
    }
}
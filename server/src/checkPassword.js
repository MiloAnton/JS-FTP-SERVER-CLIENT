export function checkPasswd(password, allSockets, socket) {
    let passw = "430 Authentication failed\r\n";
    const fs = require('fs');
    let rawdata = fs.readFileSync(`${__dirname}/../user.json`);
    let bank = JSON.parse(rawdata);
    if (bank[allSockets[socket.uid]]["password"] == password) {
        passw = "230 Password corresponds, authentication was a success !\r\n"
    }
    return passw;
}
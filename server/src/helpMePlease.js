export function helpMePlease(socket) {
    const fs = require('fs');
    let rawdata = fs.readFileSync(`${__dirname}/HELP.json`);
    let helpBank = JSON.parse(rawdata).HELPMESSAGE;
    let stringToSend = "\r\n--- The server will understand these commands ---\r\n";
    for (const [key, value] of Object.entries(helpBank)) {
        stringToSend += `-> ${key} : ${value} \r\n`;
    }
    socket.write(stringToSend);
}
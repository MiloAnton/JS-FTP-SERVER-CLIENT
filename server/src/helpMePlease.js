/**
 * myFtp by MiloAnton
 * Function to answer the client all the commands this server supports  
 */

 import fs from 'fs';

export function helpMePlease(socket) {
    try {
        let rawdata = fs.readFileSync(`${__dirname}/HELP.json`);
        let helpBank = JSON.parse(rawdata).HELPMESSAGE;
        let stringToSend = "\n--- The server will understand these commands ---\n";
        for (const [key, value] of Object.entries(helpBank)) {
            stringToSend += `-> ${key} : ${value} \r\n`;
        }
        socket.write(stringToSend);
    } catch (e) {
        console.log(e);
        socket.write("Couldn't display HELP resultats, please try again.\r\n");
    }
}
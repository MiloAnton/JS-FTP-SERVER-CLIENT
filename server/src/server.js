/**
 * myFtp by MiloAnton
 * Principal function to support all the commands server-side
 * Calls each function and manages different sockets
 */

import {
  changeDirectory
} from './functions/changeDirectory';
import {
  helpMePlease
} from './functions/helpMePlease';
import {
  readDirectory
} from './functions/readDirectory';
import {
  checkPasswd
} from './functions/checkPassword';
import { 
  checkUser 
} from './functions/checkUser';
import {
  createServer
} from "net";
import {
  quitConnection
} from './functions/quitConnection';
import {
  currentDirectory
} from './functions/currentDirectory';
import {
  whoami
} from './functions/whoami';

const allSockets = {};
let idSocket = 0;

export function launch(port) {
  try {
    const server = createServer((socket) => {
      let newIdSocket = idSocket;
      idSocket++;
      socket.uid = newIdSocket;
      console.log(`Created new socket with ID : ${idSocket}`);
      allSockets[newIdSocket] = '';
      console.log("new connection.");
      socket.on("data", (data) => {
        const message = data.toString();
        const [command, ...args] = message.trim().split(" ");
        console.log(command, args);
        switch (command) {
          case "USER":
            socket.write(checkUser(args, allSockets, socket));
            break;
          case "PASS": // Checks wether the password is valid for the current user
            socket.write(checkPasswd(args, allSockets, socket))
            break;
          case "PWD": // Has to return the current position in the servers filesystem
            currentDirectory(socket);
            break;
          case "QUIT": // Disconnects client from server
            quitConnection(socket);
            break;
          case "LIST": // Similar to ls in Bash, lists files in current folder
            readDirectory(socket)
            break;
          case "CWD": // Change folder, used to navigate filesystem
            let retErr = changeDirectory(args, socket);
            if (retErr === 0) {
              console.log("Target was empty."); // Error message server side
              break;
            }
            break;
          case "RETR": // Download a file from server
            socket.write("transfer a copy of the file FILE from the server to the client\r\n")
            break;
          case "STOR": // Upload a file to server
            socket.write("transfer a copy of the file FILE from the client to the server\r\n")
            break;
          case "HELP": // Display help information about allowed commands 
            helpMePlease(socket);
            break;
          case "WHOAMI": // Displays the current connected user
            whoami(socket, allSockets);
            break;
          case "TYPE":
            socket.write("200 \r\n");
            break;
          case "EPSV":
            socket.write("200 \r\n");
            break;
          case "EPRT":
            socket.write("200 \r\n");
            break;
          case "SYST":
            socket.write("215 \r\n");
            break;
          case "FEAT":
            socket.write("211 \r\n");
            break;
          default:
            console.log("502 command does not exist :", command, args, "\r\n");
            socket.write("502 command does not exist. \r\n");
        }
      });
      socket.write("220 Welcome in Paradise :)\r\n"); // Confirms connection with first message to client
    });

    server.listen(port, () => {
      console.log(`server started at localhost:${port}`); // Server-side start-up validator
    });
  } catch (e) {
    console.log(e);
  }
}
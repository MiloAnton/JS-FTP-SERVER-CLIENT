import { createServer } from "net";
import { cwd } from 'process';

export function launch(port) {
  const server = createServer((socket) => {
    console.log("new connection.");
    socket.on("data", (data) => {
      const message = data.toString();

      const [command, ...args] = message.trim().split(" ");
      console.log(command, args);

      switch(command) {
        case "USER":
          socket.write(checkUser(args));
          break;
        case "PASS": 
          socket.write(checkPasswd(args))
          break;
        case "PWD":
          socket.write("Current directory: "+ cwd);
          break;
        case "QUIT":
          socket.write("200 \r\n");
          break;
        case "LIST":
          
          break;
        case "CWD":
          
          break;
        case "RETR": 

          break;
        case "STOR":
          
          break; 
        case "HELP":
          socket.write("The server handles the following commands:\nUSER <username>: check if the user exists\nPASS <password>: authenticate the user with a password\nLIST: list the current directory of the server\nCWD <directory>: change the current directory of the server\nRETR <filename>: transfer a copy of the file FILE from the server to the client\nSTOR <filename>: transfer a copy of the file FILE from the client to the server\nPWD: display the name of the current directory of the server\nHELP: send helpful information to the client\nQUIT: close the connection and stop the program")
          break;
        default:
          console.log("command not supported:", command, args);
      }
    });

    socket.write("220 Hello World \r\n");
  });

  server.listen(port, () => {
    console.log(`server started at localhost:${port}`);
  });
}

export function checkUser(name) {
  let answer = "User does not exist";
  const fs = require('fs');
  let rawdata = fs.readFileSync('C:/Users/milor/Dropbox/Milo/Alternance/EFREI/Node.JS API/ftplive/my-ftp-live/server/user.json');
  let user = JSON.parse(rawdata);
  if (user[name] != null) {
    answer = "User exists"
  }
  return answer;
}

export function checkPasswd(password) {
  let passw = "Password does not correspond";
  const fs = require('fs');
  let rawdata = fs.readFileSync('C:/Users/milor/Dropbox/Milo/Alternance/EFREI/Node.JS API/ftplive/my-ftp-live/server/user.json');
  let user = JSON.parse(rawdata);
  if (user[password] == password) {
    passw = "Password corresponds"
  }
  return answer;
}
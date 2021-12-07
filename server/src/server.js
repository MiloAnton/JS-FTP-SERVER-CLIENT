import { createServer } from "net";

export function launch(port) {
  const server = createServer((socket) => {
    console.log("new connection.");
    socket.on("data", (data) => {
      const message = data.toString();
      const [command, ...args] = message.trim().split(" ");
      console.log(command, args);
      let currentUser = '';
      switch (command) {
        case "USER":
          let res = socket.write(checkUser(args));
          if (res === 'User exists') {
            currentUser = args;
          }
          break;
        case "PASS":
          socket.write(checkPasswd(args, currentUser))
          break;
        case "LIST":
          socket.write(process.cwd());
          break;
        case "QUIT":
          socket.write("200 \r\n");
          break;
        case "PWD":
          socket.write("Current folder contains : \r\n");
          break;
        case "CWD":
          socket.write("The folder you're in is now : \r\n");
          break;
        case "RETR":
          socket.write("transfer a copy of the file FILE from the server to the client\r\n")
          break;
        case "STOR":
          socket.write("transfer a copy of the file FILE from the client to the server\r\n")
          break;
        case "HELP":
          socket.write("\n---------\nThe server handles the following commands:\n---------\nUSER <username>: check if the user exists\nPASS <password>: authenticate the user with a password\nLIST: list the current directory of the server\nCWD <directory>: change the current directory of the server\nRETR <filename>: transfer a copy of the file FILE from the server to the client\nSTOR <filename>: transfer a copy of the file FILE from the client to the server\nPWD: display the name of the current directory of the server\nHELP: send helpful information to the client\nQUIT: close the connection and stop the program\r\n")
          break;
        case "WHOAMI":
          socket.write(currentUser);
          break; 
        default:
          console.log("command not supported:", command, args, "\r\n");
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

export function checkPasswd(password, currentUser) {
  let passw = "Password does not correspond";
  const fs = require('fs');
  let rawdata = fs.readFileSync('C:/Users/milor/Dropbox/Milo/Alternance/EFREI/Node.JS API/ftplive/my-ftp-live/server/user.json');
  let user = JSON.parse(rawdata);
  if (user[password] == password) {
    passw = "Password corresponds"
  }
  return answer;
}
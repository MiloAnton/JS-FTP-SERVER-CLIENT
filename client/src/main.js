/**
 * myFtp by MiloAnton
 * Client side of the ftp duo 
 */

import {
  createConnection
} from "net";
import {
  createInterface
} from "readline";

let currentCommand = '';
let isAuthenticated = false;

const client = createConnection({
  port: 4242
}, () => {
  console.log("Client successfully connected to server.");
});

client.on("data", (data) => {
  const message = data.toString();
  console.log(message);
  const [status, ...args] = message.trim().split(" ");
  switch (status) {
    case '220':
      currentCommand = "USER";
      console.log("Please precise the USER (with command): ");
      const rl = createInterface({
        input: process.stdin,
      });
      rl.on("line", (input) => {
        client.write(input)
      });
      break;
    case '221':
      console.log("Client will now close. See you bientôt :) ! <3");
      process.exit();
  }
  process.stdout.write("> ");
  if (status == 230 && currentCommand === "USER") {
    isAuthenticated = true;
  }

});
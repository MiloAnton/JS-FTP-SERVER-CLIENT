import { createConnection } from "net";
import { createInterface } from "readline";

let currentCommand = '';
let isAuthenticated = false;

const client = createConnection({ port: 4242 }, () => {
  console.log("Client successfully connected to server.");
});

client.on("data", (data) => {
  const message = data.toString();
  console.log("Server answered:", message);

  const [status, ...args] = message.trim().split(" ");
  if (status == 230 && currentCommand === "USER") {
    isAuthenticated = true;
  }

  if (status == 220) {
    currentCommand = "USER";
    client.write("USER Milo");
    const rl = createInterface({
      input: process.stdin,
    });
    rl.on("line", (input) => {
      client.write(input)
    });
  };

});


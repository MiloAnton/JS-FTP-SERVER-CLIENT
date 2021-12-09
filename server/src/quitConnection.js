/**
 * myFtp by MiloAnton
 * Function to end and destroy connection with a client according to socket
 */

export function quitConnection(socket) {
    socket.write("221 Closing connection \r\n");
    socket.end();
    socket.destroy();
}

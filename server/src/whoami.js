/**
 * myFtp by MiloAnton
 * Function to answer the client its identity  
 */

export function whoami(socket, allSockets) {
    try {
        socket.write(allSockets[socket.uid].toString() + "\r\n");
    } catch (e) {
        console.log(e);
    }
}
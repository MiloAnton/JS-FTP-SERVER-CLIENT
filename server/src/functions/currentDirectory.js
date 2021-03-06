/**
 * myFtp by MiloAnton
 * Function to display current directory (equivalent to pwd in bash)
 */

export function currentDirectory(socket) {
    try {
        socket.write("257 " + process.cwd() + "\r\n");
    } catch (e) {
        console.log(e);
        socket.write("CWD command didn't work properly, please try again.\r\n");
    }
}
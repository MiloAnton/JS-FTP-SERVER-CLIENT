/**
 * myFtp by MiloAnton
 * Function to change directory (equivalent to cd in bash)
 */

export function changeDirectory(target, socket) {
    try {
        if(target == ''){
            socket.write("You did not specify a target directory... :) \r\n");
            return 0;
        }
        process.chdir(target.toString());
        socket.write("The folder you're in is now : " + process.cwd() + "\r\n");
        console.log("Changing directory for client success\r\n");
    } catch (e) {
        console.log(e);
        socket.write("This folder doesn't seem to exist, please try another one.\r\n");
    }
}
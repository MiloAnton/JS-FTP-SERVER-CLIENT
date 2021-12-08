export function changeDirectory(target, socket) {
    process.chdir( target.toString() );
    socket.write("The folder you're in is now : " + process.cwd() + "\r\n");
}

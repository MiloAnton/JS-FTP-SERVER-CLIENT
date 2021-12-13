/**
 * myFtp by MiloAnton
 * Function to read the content of current directory (similar to a light ls in bash)
 */

import fs from 'fs';

export function readDirectory(socket) {
    try {
        let list = "";
        let loc = fs.readdirSync(process.cwd());
        loc.forEach((file) => {
            list += file + "\n"; // Concatenates string list with files 
        }); // The string already uses a clean layout 
        socket.write("Current directory filenames: \n" + list);
    } catch (e) {
        console.log(e);
        socket.write("Couldn't display current directory's listing, please try again.\r\n");
    }
}
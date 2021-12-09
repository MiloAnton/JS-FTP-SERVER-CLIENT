/**
 * myFtp by MiloAnton
 * Function to read the content of current directory (similar to a light ls in bash)
 */

import fs from 'fs';

export function readDirectory() {
    try {
        let list = "";
        let loc = fs.readdirSync(process.cwd());
        loc.forEach((file) => {
            list += file + "\r\n"; // Concatenates string list with files 
        }); // The string already uses a clean layout 
        return list;
    } catch (e) {
        console.log(e);
    }
}
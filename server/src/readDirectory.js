/**
 * myFtp by MiloAnton
 * Function to read the content of current directory (similar to a light ls in bash)
 */

export function readDirectory() {
    try {
        let list = "";
        const fs = require('fs');
        let loc = fs.readdirSync(process.cwd());
        loc.forEach((file) => {
            list += file + "\r\n"; // Concatenates string list with files 
        }); // The string already uses a clean layout 
        return list;
    } catch (e) {
        console.log(e);
    }
}
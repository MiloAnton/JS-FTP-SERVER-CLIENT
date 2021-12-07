export function readDirectory() {
    let list = "";
    const fs = require('fs');
    let loc = fs.readdirSync(__dirname);
    loc.forEach((file) => {
        list += file + "\r\n";  // Concatenates string list with files 
    });                         // The string already uses a clean layout 
    return list;
}
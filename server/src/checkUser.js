export function checkUser(name) {
    let answer = "User does not exist";
    const fs = require('fs');
    let rawdata = fs.readFileSync('C:/Users/milor/Dropbox/Milo/Alternance/EFREI/Node.JS API/ftplive/my-ftp-live/server/user.json');
    let user = JSON.parse(rawdata);
    if (user[name] != null) {
        answer = "331 User " + name + " is valid, please precise PASS \n\r"
    }
    return answer;
}

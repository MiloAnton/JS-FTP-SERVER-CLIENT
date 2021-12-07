export function checkPasswd(password, currentUser) {
    let passw = "430 Authentication failed";
    const fs = require('fs');
    let rawdata = fs.readFileSync('C:/Users/milor/Dropbox/Milo/Alternance/EFREI/Node.JS API/ftplive/my-ftp-live/server/user.json');
    let passwd = JSON.parse(rawdata);
    if (passwd[currentUser] == password) {
      passw = "230 Password corresponds, authentication was a success !"
    }
    return passw;
  }
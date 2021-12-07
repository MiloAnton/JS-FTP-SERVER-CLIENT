export function readDirectory() {
    let list = "";
    const fs = require('fs');
    fs.readdir(__dirname, (err, files) => {
      if (err)
        return err;
      else {
        files.forEach(file => {
          list += "\n" + file;
        })
        return list;
      }
    })
  }
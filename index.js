const fs = require('fs');
fs.readFile('./textfiles/data.txt', (err, data) => {
  fs.readFile(`./textfiles/${data}`, 'utf-8', (err, ans) => {
    console.log(ans);
  })
})
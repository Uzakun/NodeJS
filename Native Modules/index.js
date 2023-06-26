const fs = require("fs");

fs.writeFile("Learning.txt", "Here, I started the Node.js finally!!!", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

fs.readFile("Learning.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
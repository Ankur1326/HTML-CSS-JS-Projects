const fs = require("fs")

// // Assinchronous way to read file
fs.readFile("./03/nodejs_architecture.txt", function(err, data) {
    if (err) {
        console.log("Error : ", err);
        return err
    }
    console.log("Data : ", data.toString());
    return data;
})

// synchronous way to read file 
let data = fs.readFileSync("./03/nodejs_architecture.txt")
console.log("data : ", data.toString());
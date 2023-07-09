const fs = require("fs");

// Asyns way to append data and read file i 
// Append data to a file
fs.appendFile("03/nodejs_architecture.txt","data to be append to async way", (error) => {
    if (error) {
        console.log("Error appending to file : ", error);
    } else {
        console.log("data appended to file successfully.");
    }

    // read the contents of the file
    fs.readFile("03/nodejs_architecture.txt", "utf8", (error, data) => {
        if (error) {
           console.log("Error reading file: ", error); 
        } else {
            console.log(" Data : ", data);
        }
    })
})

// Sync way 
// Append data to a file 
fs.appendFileSync("03/nodejs_architecture.txt", "Syns way to append data to a file")

// read the contents of the file 
const fileContents = fs.readFileSync("03/nodejs_architecture.txt", "utf8");
console.log(fileContents);
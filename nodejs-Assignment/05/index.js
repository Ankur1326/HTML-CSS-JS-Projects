const fs = require("fs")

// async way to delete file 
fs.unlink("05/nodejs_architecture.txt", function(error) {
    if (error) {
        console.log("Error deleting file : ", error);
    } else {
        console.log("File deleted successfully");
    }
})

// .................... OR ...............

// sync way to delete file and using try and catch 
try {
    fs.unlinkSync("05/nodejs_architecture.txt")
    console.log("File deleted successfully");
    
} catch (error) {
    console.log("Error deleting file : ", error);
}
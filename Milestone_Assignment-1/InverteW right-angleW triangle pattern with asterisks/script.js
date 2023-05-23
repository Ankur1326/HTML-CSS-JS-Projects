let n = 6;

for(let i = n; i > 0; i--) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        row += "*"
    }
    console.log(row)
}

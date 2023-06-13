let deposit = (userDetail, amount) => {
    userDetail.balance += amount
}
let withdrawal = (userDetail, amount) => {
    if(userDetail.balance >= amount) {
        userDetail.balance -= amount
    }
    else {
        console.log("Insufficient balance");
    }
}

const userDetail = {
    name: "john",
    balance: 4000   
}

withdrawal(userDetail, 500)
console.log(userDetail)
//Output -> { name: 'john', balance: 3500 }

deposit(userDetail, 1000)
console.log(userDetail)
//Output -> { name: 'john', balance: 4500 }
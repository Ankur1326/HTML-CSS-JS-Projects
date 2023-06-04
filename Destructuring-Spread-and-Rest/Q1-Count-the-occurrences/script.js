
const occurrencesCount = (str) => {
    let arr = str.split(' ')
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase(); // convert into lowercase
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], 1)
        }
    }
    return map;
}

const inputStr = 'I have a i cat and a a a dog a dog';
console.log(occurrencesCount(inputStr));

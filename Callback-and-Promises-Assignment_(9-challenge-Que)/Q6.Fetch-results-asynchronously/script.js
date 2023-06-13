async function fun() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log(response);
    const data = response.json()
    console.log(data);
}
fun();

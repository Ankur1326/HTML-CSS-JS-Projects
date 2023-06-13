async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((error) => console.error(error))


    console.log(response);
}
getData()
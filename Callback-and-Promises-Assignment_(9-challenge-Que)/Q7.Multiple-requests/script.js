async function retriveData() {
    const firstApiResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json())

    const secondApiResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => response.json())

    const combinedData = {
        todo: firstApiResponse,
        post: secondApiResponse
    }
    return combinedData;
}
retriveData().then((data) => console.log(data))

/*
 > {todo: {…}, post: {…}}
*/
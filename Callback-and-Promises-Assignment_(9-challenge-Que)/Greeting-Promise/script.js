
function greetingPromise(name) {
    return new Promise((resolve) => {
        const greeting = `Hello, ${name}`
        resolve(greeting)
    })
}
greetingPromise("Mithun").then((message) => console.log(message)) // Output -> Hello, Mithun
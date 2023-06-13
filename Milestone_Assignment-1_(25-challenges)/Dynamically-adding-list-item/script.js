{/* <i class="fa-solid fa-arrow-right-long"></i>  */}
const allList = [
    'HTML and Semantics',
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects"
]

let countClick = 0;
const ul = document.querySelector("ul");

function add() {
    if(allList.length > countClick) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<i class="fa-solid fa-arrow-right-long"></i>` + allList[countClick]
        ul.appendChild(listItem)
        countClick++
    } else {
        alert("All item have been added")
    }
}

function del() {
    if(countClick > 0) {
        ul.removeChild(ul.lastChild)
        countClick--;
    } else {
        alert('No added item')
    }
}

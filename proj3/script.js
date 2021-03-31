const courses = [
    {
        name: "Complete ReactJS course",
        price: "2.3",
    },
    {
        name: "Complete Angular course",
        price: "4.3",
    },
    {
        name: "Complete MERN course",
        price: "2.5",
    },
    {
        name: "Complete C++ course",
        price: "2.9",
    },
];

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {      
        
        const li = document.createElement("li"); //<li></li>  
        li.classList.add("list_group_item");  //<li class="list-group-item"></li>

        const name = document.createTextNode(course.name); //<li class="list-group-item">Complete Course</li>
        li.appendChild(name);
    
        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price)

        li.appendChild(span);
        ul.appendChild(li);
    });
}

//generateList();

window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort( (a,b) => a.price - b.price);
    generateList();
});

const button1 = document.querySelector(".sort-btn1");
button1.addEventListener("click", () => {
    courses.sort( (a,b) => b.price - a.price);
    generateList();
});




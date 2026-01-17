// console.log(document.body);

// console.log(document.body.childNodes);

// console.log(document.body.firstElementChild);

// console.log(document.body.firstElementChild.children);

// console.log(document.body.firstElementChild.children[2].previousElementSibling);

// console.log(document.body.lastElementChild);

// console.log(document.body.lastElementChild.parentElement);


let boxes = document.getElementsByClassName("box");

console.log(boxes);

boxes[2].style.backgroundColor = "red";
boxes[2].style.color = "green";

document.querySelector(".box").style.backgroundColor = "blue";
document.querySelector(".box").style.color = "white";

document.getElementById("box2").style.backgroundColor = "yellow";
document.getElementById("box2").style.color = "orange";

document.getElementById("box4").style.backgroundColor = "pink";
document.getElementById("box4").style.color = "darkred";

document.getElementById("box5").style.backgroundColor = "purple";
document.getElementById("box5").style.color = "gray";




// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = "green";
    
// });
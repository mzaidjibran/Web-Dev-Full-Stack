document.querySelector(".container").innerHTML;

// '\n        <div class="box">\n            Hello World!\n        </div>\n    '

document.querySelector(".container").innerText;

// 'Hello World!'

document.querySelector(".container").outerHTML;

// '<div class="container">\n        <div class="box">\n            Hello World!\n        </div>\n    </div>'


document.querySelector(".container").tagName;

// 'DIV'

document.querySelector(".container").nodeName;

// 'DIV'

document.querySelector(".container").attributes;

// NamedNodeMap {0: class, class: class, length: 1}

let div = document.createElement("div");
div.innerHTML = "This is a new div";
document.querySelector(".container").after(div);




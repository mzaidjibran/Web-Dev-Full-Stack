function createCard(title, cName, viws, monthsOld, duration, thumbnail) {
    let viwsStr
    if (viws < 1000) {
        viwsStr = viws

    }
    else if (viws > 1000000) {
        viwsStr = viws / 1000000 + "M"
    }
    else {
        viwsStr = viws / 1000 + "k"
    }
    let html = `<div class="card">
     <div class="image">
                <img src=${thumbnail} alt="">
                <div class="duration">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>
                    ${cName} . ${viwsStr} views . ${monthsOld} months ago
                </p>
            </div>`

    document.querySelector(".container").innerHTML += html
}

createCard("Learn JavaScript in 30 Minutes", "Code Academy", 1500000, 2, "30:00", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA")

createCard("Learn JavaScript in 34 Minutes", "Code Academy", 242, 12, "30:00", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA")
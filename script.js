console.log("buttons")
for (let i = 0; i < 10000; i++) {
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("click :3"))
    button.addEventListener("mousedown", cs);
    button.addEventListener("mouseup", ce);
    document.body.appendChild(button);            
}

let click_start = []
let click_end = []

for (let i = 0; i < 4; i++) {
    click_start.push(new Audio(`./sounds/cs_${i}.mp3`))
    click_end.push(new Audio(`./sounds/ce_${i}.mp3`))
}

function cs() {
    let index = Math.floor(click_start.length * Math.random())
    click_start[index].play()
}

function ce() {
    let index = Math.floor(click_end.length * Math.random())
    click_end[index].play()
}
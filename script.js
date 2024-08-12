console.log("buttons")
for (let i = 0; i < 10000; i++) {
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("click :3"))
    button.addEventListener("mousedown", cs);
    button.addEventListener("mouseup", ce);
    button.addEventListener("mouseenter", hs);
    button.addEventListener("mouseleave", he);
    document.body.appendChild(button);            
}

let click_start = []
let click_end = []

for (let i = 0; i < 4; i++) {
    click_start.push(new Audio(`./sounds/cs_${i}.mp3`))
    click_end.push(new Audio(`./sounds/ce_${i}.mp3`))
}

function playRandom(files) {
    let index = Math.floor(files.length * Math.random())
    files[index].play()
    files[index].currentTime = 0
}

function cs() {
    playRandom(click_start)
}

function ce() {
    playRandom(click_end)
}

function hs(e) {
    if (e.buttons > 0) {
        playRandom(click_start)
    }
}

function he(e) {
    if (e.buttons > 0) {
        playRandom(click_end)
    }
}
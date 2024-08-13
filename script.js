console.log("buttons")
for (let i = 0; i < 10000; i++) {
    let button = document.createElement("div");
    button.appendChild(document.createTextNode(":3"))
    button.addEventListener("mousedown", cs(button));
    button.addEventListener("mouseup", ce(button));
    button.addEventListener("mouseenter", hs(button));
    button.addEventListener("mouseleave", he(button));
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

function cs(elem) {
    return () => {
        elem.className = "pressed"
        playRandom(click_start)
    }
}

function ce(elem) {
    return () => {
        elem.className = ""
        playRandom(click_end)
    }
}

function hs(elem) {
    return (e) => {
        if (e.buttons > 0) {
            elem.className = "pressed"
            playRandom(click_start)
        }
    }
}

function he(elem) {
    return (e) => {
        if (e.buttons > 0) {
            elem.className = ""
            playRandom(click_end)
        }
    }
}
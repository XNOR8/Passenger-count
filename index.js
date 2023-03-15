let saveEl = document.getElementById("saveEl")
let countEl = document.getElementById("countEl")
let count= 0

function increment(){
    count += 1
    countEl.textContent = count
}

//let saveEl = document.getElementById("saveEl")
function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}

//save()
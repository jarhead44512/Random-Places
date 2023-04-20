
//when btn is presser display = none for first section and second section remove display.


let btnJStyle = document.createElement("button");
btnJStyle.innerHTML = "Order Up";
btnJStyle.id = "jsBtn";
btnJStyle.style.margin = "0 auto"
document.body.appendChild(btnJStyle);

let reRoll = document.createElement('button');
reRoll.innerHTML = 'Retry';
reRoll.id = 'reRoll';
reRoll.style.margin = "0 auto"
reRoll.classList.add("disabled");
document.body.appendChild(reRoll);

let bBtn = document.createElement('button');
bBtn.innerHTML = 'New Search';
bBtn.id = 'bBtn';
bBtn.style.margin = "0 auto"
bBtn.classList.add("disabled");
document.body.appendChild(bBtn);

let scrn1 = document.getElementById("firstPage");
let scrn2 = document.getElementById("secondPage");


btnJStyle.onclick = () => {
    btnJStyle.style.display = "none";
    scrn1.classList.toggle("disabled");
    scrn2.classList.remove("disabled");
    reRoll.classList.toggle("enabled");
    reRoll.classList.add('flex');
    bBtn.classList.toggle("enabled");
    bBtn.classList.add('flex');
}


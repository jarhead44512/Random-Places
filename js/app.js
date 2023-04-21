
// 

//function for first page button to hide first page content and make second page content appear.
btnJStyle.onclick = () => {
let scrn1 = document.getElementById("firstPage");
let scrn2 = document.getElementById("secondPage");
    btnJStyle.style.display = "none";
    scrn1.classList.toggle("disabled");
    scrn2.classList.remove("disabled");
    reRoll.classList.toggle("enabled");
    bBtn.classList.toggle("enabled");
}


bBtn.onclick = () => {
    document.location.reload();
}

reRoll.onclick = () => {
    //add results
}
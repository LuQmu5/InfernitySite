function onButtonClicked() {
    let idName = this.id;
    let idNumber = idName[idName.length - 1];
    modal.style.display = "block";
    modalContent.style.backgroundImage = `url("media/images/interface-example-${idNumber}.jpg")`;
} 

function modalClose(){
    modal.style.display = "none";
}

let interfaceButtons = document.querySelectorAll(".interface-card");
let modal = document.querySelector(".interface-card-modal");
let modalContent = document.querySelector(".interface-card-modal-content");
let body = document.querySelector("body");

for (let b of interfaceButtons) {
    b.onclick = onButtonClicked;  
}

modal.onclick = modalClose;
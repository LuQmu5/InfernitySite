function onButtonClicked() {
    selectedBtn.classList.remove("gameplay-slideshow-button-selected");
    selectedBtn = this;
    selectedBtn.classList.add("gameplay-slideshow-button-selected");
    let idName = this.id;
    let idNumber = idName[idName.length - 1];
    title.innerHTML = "Шаг " + idNumber + ": " + titles[idNumber-1];
    description.innerHTML = descriptions[idNumber-1];
    gameplaySlideshowWrapper.style.backgroundImage = `url("media/images/slideshow-${idNumber}.jpg")`;
} 


let selectedBtn = document.querySelector(".gameplay-slideshow-button-selected");
let title = document.querySelector(".gameplay-slideshow-title");
let description = document.querySelector(".gameplay-slideshow-description");
let gameplaySlideshowWrapper = document.querySelector(".gameplay-slideshow");
let buttons = document.querySelectorAll(".gameplay-slideshow-button");

let titles = ["Новая игра", "По порталам", "Усиление персонажа", "Победа над боссом этажа", "Зацикливание"];
let descriptions = 
[
    "Небольшая анимированная презентация, погружающая в лор игры, после которой игрок проходит обучение в стартовой комнате",
    "Игрок волен выбрать любой из открывшихся в комнате порталов, каждый из которых может привести его в случайного типа комнату с различным геймплеем",
    "Проходя испытания игрок прокачивает своего персонажа, ставновясь сильнее, но и игра не уступает и становится сложнее с каждым пройденным этажем",
    "После долгих странствий и прохождений множества испытаний, игрок оказывается лицом к лицу с боссом этажа, победа над которым позволяет ему спуститься ниже",
    "Второй, третий и четвертый шаг повторяются до тех пор, пока игрок не спустится в недра тюрьмы, где его будет ждать главный бой с Тюремщиком. Если игрок умирает, то игра окончена"
];

for (let b of buttons) {
    b.onclick = onButtonClicked;  
}

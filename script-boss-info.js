let bossNames = ["Скорбный Харон", "Сладострастный Минос", "Двухглавый Цербер", "Сатир Плутос", "Лодочник Флегий", 
                "Разнополые близнецы Фурии Хелет и Хелен", "Адский минотавр", "Истязатель Герион", "Гиганты Бриарей, Эфиальт и Антей"
];

let bossDescriptions = [
    "при жизни - великий некромант, ныне - проклятый и уродливый демон, прикованный к лодке, вынужденный бесконечно скитаться по гнилостной реке, воскрешая погибших в Шио демонов, чтобы те навечно оставались в заточении",
    "король-завоеватель, подчинивший себе половину земель Энадлора, был совращен и обманут суккубом. Заключив демонический пакт, он обратил себя в змееподобного демона, и в итоге был изгнан в Шио собственным священником",
    "двухглавая адская псина, созданная тюремщиком, чтобы выискивать прячущихся от истязаний демонов. Изрыгает из одной пасти огонь, а из другой лёд, а острые как лезвия когти способны растерзать даже самую прочную броню",
    "когда-то один из представителей древнейшего рода высших эльфов, нашел загадочный артефакт - амулет в форме адской звезды. Артефакт был проклят и впоследствии свел владельца с ума, превратив в демонического сатира",
    "величайший предатель, которого носил свет, предавший собственного брата из зависти, был проклят самим Верховным Священником и сослан в Шио в форме бесплотногл духа, вынужденного смиренно и покорно до скончания веков перевозить особо опасных демонов на нижние этажи тюрьмы",
    "Тщеславные и гордые близнецы, раннее Герцог и Герцогиня величашей династии Высших Эльфов, в попытках обрести еще больше власти были использованы как пешки для завязки великой пятидесителетней войны самим демоном Обмана Белиалом, который обратил их в Фурий, даровав им невероятную силу, но те впоследствии убили друг-друга сами",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consectetur unde nemo eligendi deserunt placeat pariatur quibusdam itaque, magni saepe totam voluptate explicabo, alias rerum, minus ullam reprehenderit. Nostrum, quisquam!",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consectetur unde nemo eligendi deserunt placeat pariatur quibusdam itaque, magni saepe totam voluptate explicabo, alias rerum, minus ullam reprehenderit. Nostrum, quisquam!",
    "Бывшие цари великих королевств Эндалора, которые ради власти заключили сделку с демонами, получив демоническую мощь и обратившись гигантами. В конце-концов все трое перебили друг-друга"
];

let bossTactics = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consectetur unde nemo eligendi deserunt placeat pariatur quibusdam itaque, magni saepe totam voluptate explicabo, alias rerum, minus ullam reprehenderit. Nostrum, quisquam!",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consectetur unde nemo eligendi deserunt placeat pariatur quibusdam itaque, magni saepe totam voluptate explicabo, alias rerum, minus ullam reprehenderit. Nostrum, quisquam!",
    "В бою игроку нужно будет следить за двумя статусами: 'обморожение' и 'воспламенение'. Обморожение снижает скорость передвижения и атаки, а также останавливает восстановление здоровья, но делает менее уязвимым к огненным и физическим атакам, при полном заполнении шкалы игрок замерзает и теряет возможность двигаться и атаковать. Воспламенение увеличивает скорость атаки и передвижения, а также увеличивает сопротивление холоду, но увеличивает получаемый физический урон, а также наносит ощутимый урон здоровью, который геометрически возрастает по ходу заполнения шкалы, а при полном её заполнении моментально испепеляет игрока.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consectetur unde nemo eligendi deserunt placeat pariatur quibusdam itaque, magni saepe totam voluptate explicabo, alias rerum, minus ullam reprehenderit. Nostrum, quisquam!",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consectetur unde nemo eligendi deserunt placeat pariatur quibusdam itaque, magni saepe totam voluptate explicabo, alias rerum, minus ullam reprehenderit. Nostrum, quisquam!",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consectetur unde nemo eligendi deserunt placeat pariatur quibusdam itaque, magni saepe totam voluptate explicabo, alias rerum, minus ullam reprehenderit. Nostrum, quisquam!",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consectetur unde nemo eligendi deserunt placeat pariatur quibusdam itaque, magni saepe totam voluptate explicabo, alias rerum, minus ullam reprehenderit. Nostrum, quisquam!",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consectetur unde nemo eligendi deserunt placeat pariatur quibusdam itaque, magni saepe totam voluptate explicabo, alias rerum, minus ullam reprehenderit. Nostrum, quisquam!",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consectetur unde nemo eligendi deserunt placeat pariatur quibusdam itaque, magni saepe totam voluptate explicabo, alias rerum, minus ullam reprehenderit. Nostrum, quisquam!"   
];

let selectedItem = document.querySelector(".selected-boss-li");
let bossInfoItems = document.getElementsByClassName("list-item-boss-info");
let bossName = document.querySelector(".selected-boss-info-name");
let bossDescription = document.querySelector(".selected-boss-info-description");
let bossTactic = document.querySelector(".selected-boss-info-tactic-text");
let bossImage = document.querySelector(".selected-boss-info-img");

for (let i = 0; i < bossInfoItems.length; i++){
    bossInfoItems[i].addEventListener('click', function (e) {
      e.preventDefault();
      selectedItem.classList.remove("selected-boss-li");
      bossInfoItems[i].classList.add("selected-boss-li");
      selectedItem = bossInfoItems[i];

      bossName.innerHTML = `<span class='item-span'>Имя: </span>${bossNames[i]}`;
      bossDescription.innerHTML = `<span class="item-span">Описание: </span>${bossDescriptions[i]}`;
      bossTactic.innerHTML = `<span class="item-span">Тактика боя: </span>${bossTactics[i]}`;
      bossImage.src = `media/images/boss-image-${i}.jpg`
  });
}
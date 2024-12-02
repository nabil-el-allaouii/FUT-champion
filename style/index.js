let cards = document.querySelectorAll(".card");
let stadiumContainer = document.querySelector(".stadium-image");
let addButton = document.querySelector(".add-player-card");
let addinContainer = document.querySelector(".adding-container");
let list_adding = document.querySelector(".available-create-cards");
let carding = document.querySelector(".carding");

let listedContainer = document.querySelector(".cards-exist");
let listed_cards = document.querySelectorAll(".listed-card");

let poste = document.querySelector(".player_post");
let backBttn = document.querySelector(".back-button");

let ProfilePic = document.getElementById("player-picture");
let profileUpload = document.getElementById("pro-file");

let cardPic = document.getElementById("card-select");
let cardUpload = document.getElementById("card-file");

let FlagPic = document.getElementById("flag-picture");
let FlagUpload = document.getElementById("flag-file");

let leaguePic = document.getElementById("league-picture");
let leagueUpload = document.getElementById("league-file");

let postChoose = document.getElementById("position-selector");
let gkChoice = document.querySelector(".gk-created");
let usualChoice = document.querySelector(".created-stats");

let submitBttn = document.querySelector(".submit-button");
let PlayerName = document.querySelector("#Player-name");
let PlayerRating = document.querySelector("#Player-rating");

let pacing = document.getElementById("pacing");
let shooting = document.getElementById("Shooting");
let passing = document.getElementById("Passing");
let dribbling = document.getElementById("Dribbling");
let defending = document.getElementById("Defending");
let physical = document.getElementById("Physical");

let diving = document.getElementById("Diving");
let handling = document.getElementById("Handling");
let kicking = document.getElementById("Kicking");
let reflexes = document.getElementById("Reflexes");
let speed = document.getElementById("Speed");
let positioning = document.getElementById("Positioning");

let formationSelect = document.querySelector("#formation-select");
let attackers = document.querySelector(".attack-cards");
let mid = document.querySelector(".mid-cards");



let lw = document.querySelector("#LW");
let rw = document.querySelector("#RW");
let st = document.querySelector("#ST");

let main = document.querySelector(".main-button");

let allCards = document.querySelector(".all-cards");

let removeBttn = document.querySelector(".remove-button");

let playerCards = document.querySelector(".Player-cards");

let nameContainerinput = document.querySelector(".name-rating");
let nameinput = nameContainerinput.querySelectorAll("input");

let inputcontainer = document.querySelector(".created-stats");
let inputFrom = inputcontainer.querySelectorAll("input");

let gkinputcontainer = document.querySelector(".gk-created");
let gkinput = gkinputcontainer.querySelectorAll("input");



let currentCard = null;
let clickedPost = null;



submitBttn.onclick = function () {
    let newCard;
    let uniqueID = `card${Date.now()}`
    let isValid = true;
    let isgkValid = true;
    if (postChoose.value !== "GK") {
        nameinput.forEach(j => {
            if (j.value === "") {
                isValid = false;
                j.style.border = "2px solid red";
            } else {
                j.style.border = "";
            }
        })
        inputFrom.forEach(e => {
            let max = e.getAttribute("max");
            if (e.value === "" || Number(e.value) > max) {
                isValid = false;
                e.style.border = "red 2px solid";
            }
            else {
                e.style.border = "";
            }
        })
        if (!isValid) {
            alert("Please fill all the fields Correctly");
            return
        }
    } else {
        gkinput.forEach(e => {
            let max = e.getAttribute("max");
            if (e.value === "" || Number(e.value) > max) {
                isgkValid = false;
                e.style.border = "2px solid red"
            } else {
                e.style.border = ""
            }
        })
        if (!isgkValid) {
            alert("Please fill all the fields Correctly");
            return
        }
    }
    if (postChoose.value !== "GK") {
        newCard = `<div class="listed-card" data-id="${uniqueID}">
                    <button class="remove-button">X</button>
                    <img src="${cardPic.src}" alt="">
                    <div class="listed-card-stats">
                        <div class="listed-stats">
                            <p class="player_rate">${PlayerRating.value}</p>
                            <p class="player_post">${postChoose.value}</p>
                        </div>
                        <div class="listed-image">
                            <img src="${ProfilePic.src}" alt="">
                        </div>
                        <div class="listed-name">
                            <p class = "The-name">${PlayerName.value}</p>
                        </div>
                        <div class="listed-player-stats">
                            <div class="lpacing">
                                <p>PAC</p>
                                <p>${pacing.value}</p>
                            </div>
                            <div class="lshooting">
                                <p>SHO</p>
                                <p>${shooting.value}</p>
                            </div>
                            <div class="lpassing">
                                <p>PAS</p>
                                <p>${passing.value}</p>
                            </div>
                            <div class="ldribbling">
                                <p>DRI</p>
                                <p>${dribbling.value}</p>
                            </div>
                            <div class="ldefending">
                                <p>DEF</p>
                                <p>${defending.value}</p>
                            </div>
                            <div class="lphysical">
                                <p>PHY</p>
                                <p>${physical.value}</p>
                            </div>
                        </div>
                        <div class="listed-flag">
                            <img src="${FlagPic.src}" alt="">
                        </div>
                        <div class="listed-league">
                            <img src="${leaguePic.src}" alt="">
                        </div>
                    </div>
                </div>`

    } else {
        newCard = `<div class="listed-card" data-id="${uniqueID}">
                    <button class="remove-button">X</button>
                    <img src="${cardPic.src}" alt="">
                    <div class="listed-card-stats">
                        <div class="listed-stats">
                            <p class="player_rate">${PlayerRating.value}</p>
                            <p class="player_post">${postChoose.value}</p>
                        </div>
                        <div class="listed-image">
                            <img src="${ProfilePic.src}" alt="">
                        </div>
                        <div class="listed-name">
                            <p class = "The-name">${PlayerName.value}</p>
                        </div>
                        <div class="listed-player-stats">
                            <div class="lpacing">
                                <p>DIV</p>
                                <p>${diving.value}</p>
                            </div>
                            <div class="lshooting">
                                <p>HAN</p>
                                <p>${handling.value}</p>
                            </div>
                            <div class="lpassing">
                                <p>KIC</p>
                                <p>${kicking.value}</p>
                            </div>
                            <div class="ldribbling">
                                <p>REF</p>
                                <p>${reflexes.value}</p>
                            </div>
                            <div class="ldefending">
                                <p>SPE</p>
                                <p>${speed.value}</p>
                            </div>
                            <div class="lphysical">
                                <p>POS</p>
                                <p>${positioning.value}</p>
                            </div>
                        </div>
                        <div class="listed-flag">
                            <img src="${FlagPic.src}" alt="">
                        </div>
                        <div class="listed-league">
                            <img src="${leaguePic.src}" alt="">
                        </div>
                    </div>
                </div>`
    }
    listedContainer.innerHTML += newCard;
    listed_cards = document.querySelectorAll(".listed-card");

    const allCardElement = document.createElement("div");
    allCardElement.innerHTML = newCard;
    const addedCard = allCardElement.firstElementChild;
    allCards.appendChild(addedCard);
    allCards.scrollIntoView();


    const removebutton = addedCard.querySelector(".remove-button");
    removebutton.addEventListener("click", (event) => {
        addedCard.remove();
        const matchingcard = listedContainer.querySelector(`.listed-card[data-id="${uniqueID}"]`)
        if (matchingcard) {
            matchingcard.remove();
        }
    })

    const another = listedContainer.querySelectorAll(".remove-button");
    another.forEach((button) => {
        button.style.display = "none";
    });

    listed_cards = document.querySelectorAll(".listed-card");
    Array.from(listedContainer.children).forEach((j) => {
        j.addEventListener("click", () => {
            if (currentCard) {
                let previousPlayer = currentCard.querySelector(".listed-card");
                if (previousPlayer) {
                    let prevCardId = previousPlayer.getAttribute("data-id");
                    let previousListedCard = Array.from(listed_cards).find(card => card.getAttribute("data-id") === prevCardId);
                    if (previousListedCard) {
                        previousListedCard.classList.remove("used-card");
                        previousListedCard.style.display = "";
                    }
                }
                let rmvbttn = j.querySelector(".remove-button");
                rmvbttn.style.display = "none";
                currentCard.innerHTML = j.outerHTML;
                stadiumContainer.style.display = "";
                backBttn.style.display = "none"
                list_adding.style.display = "none";
                currentCard = null;
                j.classList.add("used-card");
                j.style.display = "none";
            }
        });
    });

}

formationSelect.addEventListener("change", () => {
    if (formationSelect.value === "4-4-2") {
        lw.style.display = "none";
        rw.style.display = "none";

        let secondST = document.createElement("div");
        secondST.className = "card";
        secondST.id = "ST";
        let stImg = document.createElement("img");
        stImg.src = "images/empty-card.webp";
        let stPosition = document.createElement("p");
        stPosition.className = "position";
        stPosition.innerText = "ST";
        secondST.appendChild(stImg);
        secondST.appendChild(stPosition);
        attackers.style.gridTemplateColumns = "150px 150px";
        attackers.appendChild(secondST);

        mid.innerHTML = "";

        let lm = document.createElement("div");
        lm.className = "card";
        lm.id = "LM";
        let lmImg = document.createElement("img");
        lmImg.src = "images/empty-card.webp";
        let lmPosition = document.createElement("p");
        lmPosition.className = "position";
        lmPosition.innerText = "LM";
        lm.appendChild(lmImg);
        lm.appendChild(lmPosition);
        mid.appendChild(lm);

        for (let i = 0; i < 2; i++) {
            let cm = document.createElement("div");
            cm.className = "card";
            cm.id = "CM";
            let cmImg = document.createElement("img");
            cmImg.src = "images/empty-card.webp";
            let cmPosition = document.createElement("p");
            cmPosition.className = "position";
            cmPosition.innerText = "CM";
            cm.appendChild(cmImg);
            cm.appendChild(cmPosition);
            mid.appendChild(cm);
        }
        mid.style.gridTemplateColumns = "150px 150px 150px 150px";
        let rm = document.createElement("div");
        rm.className = "card";
        rm.id = "RM";
        let rmImg = document.createElement("img");
        rmImg.src = "images/empty-card.webp";
        let rmPosition = document.createElement("p");
        rmPosition.className = "position";
        rmPosition.innerText = "RM";
        rm.appendChild(rmImg);
        rm.appendChild(rmPosition);
        mid.appendChild(rm);
    } else if (formationSelect.value === "4-3-3") {
        lw.style.display = "";
        rw.style.display = "";
        attackers.innerHTML = "";
        mid.innerHTML = "";

        attackers.style.gridTemplateColumns = "150px 150px 150px";
        attackers.appendChild(lw);
        attackers.appendChild(st);
        attackers.appendChild(rw);

        mid.style.gridTemplateColumns = "150px 150px 150px";
        for (let i = 0; i < 3; i++) {
            let cm = document.createElement("div");
            cm.className = "card";
            cm.id = "CM";
            let cmImg = document.createElement("img");
            cmImg.src = "images/empty-card.webp";
            let cmPosition = document.createElement("p");
            cmPosition.className = "position";
            cmPosition.innerText = "CM";
            cm.appendChild(cmImg);
            cm.appendChild(cmPosition);
            mid.appendChild(cm);
        }
    }
});
playerCards.addEventListener("click", (event) => {
    const clickedElement = event.target.closest(".card");
    if (clickedElement) {
        clickedPost = clickedElement.id;
        currentCard = clickedElement;
        allCards.style.display = "none";
        stadiumContainer.style.display = "none";
        list_adding.style.display = "flex";
        backBttn.style.display = "block";
        carding.style.display = "none";
        listedContainer.style.display = "";
        Array.from(listedContainer.children).forEach((card) => {
            let playerPosition = card.querySelector(".player_post").innerText;
            if (playerPosition === clickedPost && !card.classList.contains("used-card")) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    }
});

main.onclick = function () {
    allCards.style.display = "grid";
    carding.style.display = "";
    stadiumContainer.style.display = "none";
    list_adding.style.display = "flex";
    backBttn.style.display = "block";
    listedContainer.style.display = "none"
}


backBttn.addEventListener("click", () => {
    stadiumContainer.style.display = "";
    list_adding.style.display = "none";
    backBttn.style.display = "none"
})

profileUpload.onchange = function () {
    ProfilePic.src = URL.createObjectURL(profileUpload.files[0]);
}

cardUpload.onchange = function () {
    cardPic.src = URL.createObjectURL(cardUpload.files[0]);
}

FlagUpload.onchange = function () {
    FlagPic.src = URL.createObjectURL(FlagUpload.files[0]);
}

leagueUpload.onchange = function () {
    leaguePic.src = URL.createObjectURL(leagueUpload.files[0]);
}

postChoose.onchange = function () {
    if (postChoose.value === "GK") {
        gkChoice.style.display = "block";
        usualChoice.style.display = "none";
    }
    else {
        usualChoice.style.display = "block";
        gkChoice.style.display = "none";
    }
}

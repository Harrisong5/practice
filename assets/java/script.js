
  let playerTurn = true;
let gameRunning = true;
const fightStatusElement = document.getElementById("fightStatus");

let hero = {
    name: "Oliver Twist",
    image: "https://www.wholeheartedmen.com/wp-content/uploads/2013/12/oliver_twist-more.jpg",
    health: 100,
    attacks: [
        {
            name: "Eye Stab",
            dialogue: "Here, hold this!",
        },
        {
            name: "Whooping Cough",
            dialogue: "Catch this!",
        },
        {
            name: "Stale Baguette",
            dialogue: "Please sir, have some more... PAIN.",
        },
    ],
    attack() {
        return Math.ceil(Math.random() * 10);
    },
    die() {
        fightStatusElement.innerText = `Mighty Hulk picked up Oliver's frail frame and tore the poor little boy in half. "HULK WIIIIINNNNSSSS," he roared.`;
    },
};

let villain = {
    name: "Hulk Jr",
    image: "https://images.nightcafe.studio/jobs/rMPy5bCnfgsfWILH5LAE/rMPy5bCnfgsfWILH5LAE--1--pub4c.jpg?tr=w-1600,c-at_max",
    health: 100,
    attacks: [
        {
            name: "Hulk Smash",
            dialogue: "HULK SMAAAAAAASH!!!!",
        },
        {
            name: "Kerb Stomp",
            dialogue: "HULK STOOOOOOMP!!!!",
        },
        {
            name: "Gamma Burst",
            dialogue: "HULK BUUUUUUURRRRRST!!!!",
        },
    ],
    attack() {
        let damage = Math.ceil(Math.random() * 10);
        let attack = Math.floor(Math.random() * 3);
        return [damage, this.attacks[attack]];
    },
    die() {
        fightStatusElement.innerText = `Oliver took his stale baguette and impaled the mighty figure of Hulk with it. He smiled with delight as the creatures blood soaked the baguette - "yum - that will help with my iron deficiency."`;
    },
};

const mainHeadingElement = document.getElementById("mainHeading");
mainHeadingElement.innerText = `${hero.name} vs ${villain.name}`;

const heroNameElement = document.getElementById("heroName");
heroNameElement.innerText = hero.name;

const heroHealthElement = document.getElementById("heroHealth");
heroHealthElement.innerText = hero.health;

const heroImageElement = document.getElementById("heroImage");
heroImageElement.src = hero.image;

const villainNameElement = document.getElementById("villainName");
villainNameElement.innerText = villain.name;

const villainHealthElement = document.getElementById("villainHealth");
villainHealthElement.innerText = villain.health;

const villainImageElement = document.getElementById("villainImage");
villainImageElement.src = villain.image;

const buttonElements = document.getElementsByTagName("button");
for (let i = 0; i < buttonElements.length; i++) {
    buttonElements[i].innerText = hero.attacks[i].name;
    buttonElements[i].setAttribute("data-attack-name", hero.attacks[i].name);

    buttonElements[i].addEventListener('click', function () {
        if (playerTurn && gameRunning) {
            let damage = hero.attack();
            villain.health -= damage;
            villainHealthElement.innerText = villain.health;
            fightStatusElement.innerText = `${hero.name} used his ${this.getAttribute("data-attack-name")} attack and dealt ${damage} damage!`;
            playSound(this.getAttribute("data-attack-name"));
            playerTurn = false;
            checkGameOver();
            setTimeout(villainTurn, 5000);
        }
    });
}

function villainTurn() {
    if (gameRunning) {
        let attackInfo = villain.attack();
        hero.health -= attackInfo[0];
        heroHealthElement.innerText = hero.health;
        fightStatusElement.innerText = `${villain.name} used his ${attackInfo[1].name} attack and dealt ${attackInfo[0]} damage!`;
        playSound(attackInfo[1].name);
        checkGameOver();
        playerTurn = true;
    }
}

function checkGameOver() {
    if (hero.health <= 0) {
        hero.die();
        gameRunning = false;
    }
    else if (villain.health <= 0) {
        villain.die();
        gameRunning = false;
    }
}

function playSound(fileName) {
    let sound = new Audio(`assets/sounds/${fileName}.mp3`);
    sound.play();
}
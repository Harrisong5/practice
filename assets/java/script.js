let char1 = {
    name: "Oliver Twist",
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
      let damage = Math.ceil(Math.random() * 10);
      let attack = Math.floor(Math.random() * 3);
      console.log(
        `"${this.attacks[attack].dialogue}," shouted Oliver, as he used his ${this.attacks[attack].name} attack and dealt ${damage} damage.\n`,
      );
      return damage;
    },
    die() {
      console.log(
        `Mighty Hulk picked up Oliver's frail frame and tore the poor little boy in half. "HULK WIIIIINNNNSSSS," he roared.`,
      );
    },
  };
  
  let char2 = {
    name: "Hulk Jr",
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
      console.log(
        `"${this.attacks[attack].dialogue}," shouted Hulk, as he used his ${this.attacks[attack].name} attack and dealt ${damage} damage.\n`,
      );
      return damage;
    },
    die() {
      console.log(
        `Oliver took his stale baguette and impaled the mighty figure of Hulk with it. He smiled with delight as the creatures blood soaked the baguette - "yum - that will help with my iron deficiency."`,
      );
    },
  };
  
  let gameRunning = true;
  while (gameRunning) {
    let damageToChar2 = char1.attack();
    char2.health -= damageToChar2;
    let damageToChar1 = char2.attack();
    char1.health -= damageToChar1;
  
    if (char1.health <= 0) {
      char1.die();
      gameRunning = false;
    } else if (char2.health <= 0) {
      char2.die();
      gameRunning = false;
    }
  }
let char1 = {
    name: "Player1",
    health: 99,
    stats: {
      att: 99
      str: 89
      def: 99
    },
    attacks: [
      {
        name: "Accurate",
        dialogue: "Here, hold this!",
      },
      {
        name: "Aggressive",
        dialogue: "Catch this!",
      },
      {
        name: "Defensive",
        dialogue: "Please sir, have some more... PAIN.",
      },
      {
        name: "Special Attack",
        dialogue: "Please sir, have some more... PAIN.",
      },
      
    ],
    attack() {
      let accuracyroll = Math.floor(Math.random()*2*char1[this.stats.att])
      if (accuracyroll >= char2[this.stats.def]){
        let damage = Math.ceil(Math.random() * 9);
        let attack = Math.floor(Math.random() * 4);
        console.log(
          `"${this.attacks[attack].dialogue}," shouted Oliver, as he used his ${this.attacks[attack].name} attack and dealt ${damage} damage.\n`,
        );
        return damage;
      } else {
        console.log('Player1 missed an attack.')
        break
      }
      
    },
    die() {
      console.log(
        `Mighty Hulk picked up Oliver's frail frame and tore the poor little boy in half. "HULK WIIIIINNNNSSSS," he roared.`,
      );
    },
  };
  
  let char2 = {
    name: "Player2",
    health: 99,
    attacks: [
      {
        name: "Accurate",
        dialogue: "HULK SMAAAAAAASH!!!!",
      },
      {
        name: "Agressive",
        dialogue: "HULK STOOOOOOMP!!!!",
      },
      {
        name: "Defensive",
        dialogue: "HULK BUUUUUUURRRRRST!!!!",
      },
      {
        name: "Special attack",
        dialogue: "HULK BUUUUUUURRRRRST!!!!",
      },
    ],
    attack() {
      let damage = Math.ceil(Math.random() * 10);
      let attack = Math.floor(Math.random() * 4);
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
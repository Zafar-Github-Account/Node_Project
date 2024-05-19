#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

class person {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    this.fuel -= 25;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

class opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    this.fuel -= 25;
  }
  fuelIncrease() {
    this.fuel += 25;
  }
}

console.log(
  chalk.bold.bgBlack.bgRed.underline("\n\tWellcome To Adventure Game "),
  chalk.yellowBright("By"),
  chalk.bold.bgBlack.bgRed.underline("ZAFAR SOHAIL\n")
);
async function startGame() {
  let human = await inquirer.prompt([
    {
      name: "user",
      type: "input",
      message: "Please enter your name:",
      validate: function (value) {
        if (value.trim() !== "") {
          return true;
        }
        return "Please enter a non-empty value.";
      },
    },
  ]);

  let opponentOption = await inquirer.prompt([
    {
      name: "oppoents",
      type: "list",
      message: "Choose Oppoennt: ",
      choices: ["Skeleton", "Zombie", "Warrior", "Assassin"],
    },
  ]);

  let p1 = new person(human.user);
  let o1 = new opponent(opponentOption.oppoents);
  console.log(
    chalk.bold(
      `\n\tPerson Name: ${chalk.cyan.underline.bold.italic(
        p1.name
      )} | Fuel:${chalk.bold.green(p1.fuel)} ${chalk.bold.red(
        "\n\t\t\tVS\n"
      )} \tOpponent: ${chalk.cyan.underline.italic(
        o1.name
      )} | Fuel:${chalk.bold.green(o1.fuel)}\n`
    )
  );

  do {
    let fightOption = await inquirer.prompt([
      {
        name: "chooseOption",
        type: "list",
        message: "Option to Fight",
        choices: ["Attack", "Defend", "Refuel", "Run.."],
      },
    ]);
    if (fightOption.chooseOption === "Attack") {
      const count = Math.floor(Math.random() * 2);
      if (count > 0) {
        p1.fuelDecrease();
        console.log(
          chalk.bold(
            `\n\tPerson Name: ${chalk.bold.red(
              p1.name
            )} | Fuel: ${chalk.bold.underline.red(p1.fuel)} ${chalk.bold.red(
              " Damaged"
            )}`
          )
        );

        console.log(
          chalk.bold(
            `\tOpponent: ${chalk.bold.green(
              o1.name
            )} | Fuel: ${chalk.bold.underline.green(
              o1.fuel
            )} ${chalk.bold.green(" Attacked")}\n`
          )
        );
      }
      if (p1.fuel <= 0) {
        console.log(chalk.bold.red("You Loose!, Game Over\n"));
        break;
      }
      if (count <= 0) {
        o1.fuelDecrease();
        console.log(
          chalk.bold(
            `\n\tOpponent: ${chalk.bold.red(
              o1.name
            )} | Fuel: ${chalk.bold.underline.red(o1.fuel)} ${chalk.bold.red(
              " Damaged"
            )}`
          )
        );

        console.log(
          chalk.bold(
            `\tPerson Name: ${chalk.bold.green(
              p1.name
            )} | Fuel: ${chalk.bold.underline.green(
              p1.fuel
            )} ${chalk.bold.green(" Attacked")}\n`
          )
        );
      }
      if (o1.fuel <= 0) {
        console.log(chalk.bold.greenBright("You Win! Congratulations!\n"));
        break;
      }
    } else if (fightOption.chooseOption === "Defend") {
      let count = Math.floor(Math.random() * 2);
      if (count > 0) {
        p1.fuelDecrease();
        console.log(
          chalk.bold(
            `\n\tPerson Name: ${chalk.bold.red(
              p1.name
            )} | Fuel: ${chalk.bold.underline.red(p1.fuel)} ${chalk.bold.red(
              " Damaged"
            )}`
          )
        );

        console.log(
          chalk.bold(
            `\tOpponent: ${chalk.bold.green(
              o1.name
            )} | Fuel: ${chalk.bold.underline.green(
              o1.fuel
            )} ${chalk.bold.green(" Attacked")}\n`
          )
        );
      }
      if (p1.fuel <= 0) {
        console.log(chalk.bold.red("You Loose!, Game Over\n"));
        break;
      }
      if (count <= 0) {
        o1.fuelDecrease();
        console.log(
          chalk.bold(
            `\n\tOpponent: ${chalk.bold.red(
              o1.name
            )} | Fuel: ${chalk.bold.underline.red(o1.fuel)} ${chalk.bold.red(
              " Damaged"
            )}`
          )
        );

        console.log(
          chalk.bold(
            `\tPerson Name: ${chalk.bold.green(
              p1.name
            )} | Fuel: ${chalk.bold.underline.green(
              p1.fuel
            )} ${chalk.bold.green(" Attacked")}\n`
          )
        );
      }
      if (o1.fuel <= 0) {
        console.log(chalk.bold.greenBright("You Win! Congratulations!\n"));
        break;
      }
    } else if (fightOption.chooseOption === "Refuel") {
      p1.fuelIncrease();
      console.log(
        chalk.bold.underline.green(`\n\tIncrease your Fuel: ${p1.fuel}\n`)
      );
      o1.fuelIncrease();
    } else if (fightOption.chooseOption === "Run..") {
      console.log(
        chalk.bold.italic.red("\n\tYou Loose Fight! Batter Than Next Time.\n")
      );
      break;
    }
  } while (true);

  let rejoin = await inquirer.prompt([
    {
      name: "Rejoining",
      type: "confirm",
      message: "Do you want to Rejoin the game ?",
    },
  ]);
  if (rejoin.Rejoining) {
    startGame();
  } else {
    console.log("\nThanks for playing");
  }
}
startGame();
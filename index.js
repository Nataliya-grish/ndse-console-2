#!/usr/bin/env node
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const startGame = () => {
  const number = Math.round(Math.random() * 100);
  rl.question(`Загадано число от 0 до 100 \n`, (data) => {
    if (Number(data) === number) {
      console.log(`Отгадано число ${number}`);
      rl.close();
    } else if (data !== number) {
      choosingNumber(number, data);
    }
  });
};

const choosingNumber = (number, randomNumber) => {
  if (number === randomNumber) {
    console.log(`Отгадано число ${number}`);
    rl.close();
  } else if (number > randomNumber) {
    rl.question(`Больше \n`, (input) => {
      choosingNumber(number, Number(input));
    });
  } else if (number < randomNumber) {
    rl.question(`Меньше \n`, (input) => {
      choosingNumber(number, Number(input));
    });
  } else {
    rl.question(`Введите число! \n`, (input) => {
      choosingNumber(number, Number(input));
    });
  }
};

startGame();
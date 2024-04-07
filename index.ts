#! /usr/bin/env node

import inquirer from "inquirer";
let input = await inquirer.prompt([
  { message: "enter your first number",type: "number", name: "Num1"},
  { message: "enter your first number",type: "number", name: "Num2"},
  {
    message: "select your operator",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplaction", "division"],
  },
]);
if (input.operator === "addition"){console.log(input.Num1+input.Num2)}
else if(input.operator === "subtraction"){console.log(input.Num1-input.Num2)}
else if(input.operator === "multiplaction"){console.log(input.Num1*input.Num2)}
else if(input.operator === "division"){console.log(input.Num1/input.Num2)}
else{console.log("select a number")};

#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100; //Dollar
let myBalance2 = 20000; //Dollar
let myPincode = 2005;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin number",
        type: "number"
    }]);
if (pinAnswer.pin === myPincode) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select one option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(`Unable to process transaction! Your current balance is ${myBalance}`);
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "Cash",
                message: "Please select how much money you want?",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        if (fastCash.Cash === "1000") {
            if (fastCash.Cash >= myBalance) {
                console.log(`Insufficient Balance!Your current balance is ${myBalance}`);
            }
            else {
                myBalance -= fastCash.Cash;
                console.log(`Your remaining balance is ${myBalance}`);
            }
        }
        if (fastCash.Cash === "2000") {
            if (fastCash.Cash >= myBalance) {
                console.log(`Insufficient Balance!Your current balance is ${myBalance}`);
            }
            else {
                myBalance -= fastCash.Cash;
                console.log(`Your remaining balance is ${myBalance}`);
            }
        }
        if (fastCash.Cash === "5000") {
            if (fastCash.Cash >= myBalance) {
                console.log(`Insufficient Balance!Your current balance is ${myBalance}`);
            }
            else {
                myBalance -= fastCash.Cash;
                console.log(`Your remaining balance is ${myBalance}`);
            }
        }
        if (fastCash.Cash === "10000") {
            if (fastCash.Cash >= myBalance) {
                console.log(`Insufficient Balance!Your current balance is ${myBalance}`);
            }
            else {
                myBalance -= fastCash.Cash;
                console.log(`Your remaining balance is ${myBalance}`);
            }
        }
    }
}
else {
    console.log("Incorrect pin number");
}

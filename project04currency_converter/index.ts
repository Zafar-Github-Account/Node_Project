#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk"
const currencies:any= {
   
    "United States Dollar (USD)": 1,//base currency
        "Australian Dollar (AUD)": 1.52,
        "British Pound Sterling (GBP)": 0.79,
        "Canadian Dollar (CAD)": 1.36,
        "Chinese Yuan Renminbi (CNY)": 7.23,
        "Emirati Dirham (AED)": 3.67,
        "Indian Rupee (INR)": 83.30,
        "Pakistani Rupee (PKR)": 280,
        "Qatari Riyal (QAR)":3.64,
        "Saudi Riyal (SAR)": 3.75,
        "Sri Lankan Rupee (LKR)": 298.61,
    }
    console.log(chalk.yellowBright.bold("\t\n<<<<<<<======================welcome to Zafar currency converter===================>>>>>>>>\t\n"));
    let user_answer = await inquirer.prompt([

        {
            name:"from",
            message:chalk.red("enter from currency"),
            type:"list",
            choices:["United States Dollar (USD)", "Australian Dollar (AUD)","British Pound Sterling (GBP)",
            "Canadian Dollar (CAD)", "Chinese Yuan Renminbi (CNY)","Emirati Dirham (AED)","Indian Rupee (INR)"
        ,"Pakistani Rupee (PKR)","Qatari Riyal (QAR)", "Saudi Riyal (SAR)","Sri Lankan Rupee (LKR)"]
        },
        {
            name:"to",
            type:"list",
            message:chalk.blueBright("Enter to currency"),
            choices:["United States Dollar (USD)", "Australian Dollar (AUD)","British Pound Sterling (GBP)",
            "Canadian Dollar (CAD)", "Chinese Yuan Renminbi (CNY)","Emirati Dirham (AED)","Indian Rupee (INR)"
        ,"Pakistani Rupee (PKR)","Qatari Riyal (QAR)", "Saudi Riyal (SAR)","Sri Lankan Rupee (LKR)"]
        },
        {
            name:"Amount",
            type:"number",
            message:chalk.greenBright("Enter your amount"),
        }
    ]
);
//let number = Math.random()*100;

let fromAmount = currencies[user_answer.from]
let toAmount = currencies[user_answer.to]
let amount =user_answer.Amount
let baseAmount = amount / fromAmount // base currency
let convertedAmount = baseAmount * toAmount
console.log(~~convertedAmount);



#! /usr/bin/env node
import inquirer from "inquirer"
async function AskQuestion(){
    const ans=await inquirer.prompt([{
        "type":"list",
        "name":"Question01",
        "choices":["farooq sattar","khalid maqbool siddique","kamran tessori","mustafa kamal"],
        "message":"who is governor of sindh?",
    },
{   
    "type":"list",
    "name":"Question02",
    "choices":["farooq sattar","khalid maqbool siddique","kamram tessori","mustafa kamal"],
    "message":"who is convenor of MQM",
},
])
if(ans.Question01==="kamran tessori"){
    console.log("you are correct")
}
else{
    console.log("you are not correct")
}
if(ans.Question02 === "khalid maqbool siddique"){
    console.log("you are correct")
}
else{
    console.log("you are not correct")}
}

AskQuestion()
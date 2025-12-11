let userscore=0;
let computerscore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const genComputerChoice = () => {   
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}  // <-- Added mis
let userscorepoint = document.getElementById("userscore");
let computerscorepoint = document.getElementById("computerscore");
const showWinner = (userWin, userChoiceId, compChoice) =>{
    if(userWin){
        userscore++;
        userscorepoint.innerText = userscore;
        console.log("User wins!");
        message.innerText = `YOU WIN! ${userChoiceId} beats ${compChoice}`;
        message.style.backgroundColor = "green";
         } else {   
        computerscore++;   
        computerscorepoint.innerText = computerscore;          
        console.log("Computer wins!");
        message.innerText = `YOU LOSE! ${compChoice} beats ${userChoiceId}`;  
        message.style.backgroundColor = "red";
        
    }
};

const PlayGame = (userChoiceId) => {
    console.log("user choice = ", userChoiceId);
    const compChoice = genComputerChoice();
    console.log("computer choice =",compChoice);
    if(userChoiceId === compChoice){
        console.log("It's a tie!");
        message.innerText = "It's a Tie!";
    }
    else {
        let userWin = true;
        if (userChoiceId === "rock" ) {
            userWin = compChoice === "paper"?false : true;
    } else if (userChoiceId === "paper") {
            userWin = compChoice === "scissors"?false : true;
    } else if (userChoiceId === "scissors") {
            userWin = compChoice === "rock"?false : true;
    }   
    showWinner(userWin, userChoiceId, compChoice);
}
};
choices.forEach((choice) => {  // <-- Fixed forEach syntax
    choice.addEventListener("click",()=>{
        const userchoiceId = choice.getAttribute("id");  // <-- Changed to 'choice'
        console.log("choice was clicked:", userchoiceId);
        PlayGame(userchoiceId);  // <-- Call PlayGame function
    });
});
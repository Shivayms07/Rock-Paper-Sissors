let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genComChoice = () =>{
    const option = ["rock","paper", "sissors"];
    const randId = Math.floor(Math.random() * 3);
    return option[randId];
};

const drawGame = () =>{
    msg.innerText = (" Match Draw Play Again !!")
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin , userChoice , comChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = ` You  Lose! ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //genrate computer choice
    const comChoice = genComChoice();
    console.log("comp choice =", comChoice)

    if(userChoice === comChoice){
        drawGame();
        
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // sissors , paper
            userWin = comChoice === "paper" ? false: true;
        } else if( userChoice === "paper"){
             //rock , sissors
             userWin = comChoice === "sissors" ? false: true;
        }else {
            // rock , paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , comChoice);
    } 

};
choices.forEach((choice)  => {
    choice.addEventListener("click", () =>{
     const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});

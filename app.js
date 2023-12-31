let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");    
    playgame(userchoice);
    });
});

const playgame =(userchoice) => {
    console.log("userchoice = ", userchoice);

    const compchoice = gencompchoice();
    console.log("compchoice = ", compchoice);  

    if(userchoice===compchoice){
        drawgame();
    }else{

         let userwin = true;
    if (userchoice === "ROCK") {
      //scissors, paper
      userwin = compchoice === "PAPER" ? false : true;
    } else if (userchoice === "PAPER") {
      //rock, scissors
      userwin = compchoice === "SCISSOR" ? false : true;
    } else {
      //rock, paper
      userwin = compchoice === "ROCK" ? false : true;
    }
        showwinner(userwin , userchoice, compchoice);
     }
    }
    


const gencompchoice =() =>{
    const options = ["ROCK", "PAPER" , "SCISSOR"];
    const rndmidx = Math.floor(Math.random()*3);
    return options[rndmidx];
}

const drawgame = () =>{
     msg.innerText = "Game is draw , Play again";
     msg.style.backgroundColor = "#081b31";
    }

const showwinner = (userwin , userchoice ,compchoice) =>{
     if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `Congratulations! You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
     }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `Opps! You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
     }
}

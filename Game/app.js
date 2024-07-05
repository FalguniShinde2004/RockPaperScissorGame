let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#Message");
const userScorePara=document.querySelector("#userScore");
const CompScorePara=document.querySelector("#CompScore");
const DrawGame=()=>{
   
    msg.innerText="Game was draw.Please try again."
}
const genComChoice=()=>{
    const option=["rock","paper","scissors"];
    const ranInd=Math.floor(Math.random()*3);
    return option[ranInd];
}
const playGame=(userChoice)=>{
    
    const CompChoice=genComChoice();

    if(userChoice===CompChoice){
DrawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin=CompChoice==="paper"? false : true; 
        }else if(userChoice==="paper"){
            userWin=CompChoice==="scissor"?false:true;
        }else{
            userWin=CompChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,CompChoice);
    }
};
const showWinner=(userWin,userChoice,CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
       
        msg.innerText=`You Won!!! ${userChoice} beats ${CompChoice}`
    }
    else{
        comScore++;
        CompScorePara.innerText=comScore;
       
        msg.innerText=`You lose! ${CompChoice} beats ${userChoice}`
    }
}

choices.forEach((choice)=>{
   
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
      
       playGame(userChoice);
})
})
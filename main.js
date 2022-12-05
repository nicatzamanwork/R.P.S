const DeusChoice = document.getElementById('computer-choice')
const NeoChoice = document.getElementById('user-choice')
const resultDisplay=document.getElementById('user-choice')
const possibleChoices=document.querySelectorAll('button')
let Neo;
let computerChoice;
possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{

    Neo=e.target.id;
    NeoChoice.innerHTML=Neo;
    generateComputerChoice();
    getResult();
}))
for(var i=0;i<=100;i++){



}





function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3)+1;

    if(randomNumber===1){
        computerChoice='rock'
    }
    else if(randomNumber===2){
        computerChoice='scissor'
    }
    else if(randomNumber===3){
        computerChoice='paper'
    }
    DeusChoice.innerHTML=computerChoice

}
let count =0;

function getResult(){
    if(computerChoice===Neo){
        result.innerHTML='DRAW'
    }
    if(computerChoice==='rock' && Neo==='paper'){
        result.innerHTML='Neo, You Win!'
        count=count+1
        localStorage.setItem('count',count);

        document.getElementById("score").innerHTML = localStorage.getItem("count");

        
    }

    if(computerChoice==='scissor' && Neo==='rock'){
        result.innerHTML='Neo, You Win!'
        count=count+1
        localStorage.setItem('count',count);

        document.getElementById("score").innerHTML = localStorage.getItem("count");

        
    } 
    if(computerChoice==='paper' && Neo==='scissor'){
        result.innerHTML='Neo, You Win!';
        count=count+1
        localStorage.setItem('count',count);

        document.getElementById("score").innerHTML = localStorage.getItem("count");
        
    }
    if(computerChoice==='rock' && Neo==='scissor'){
        result.innerHTML='Neo, You Lost!'
    }
    
    if(computerChoice==='paper' && Neo==='rock'){
        result.innerHTML='Neo, You Lost!'
    }   
    if(computerChoice==='scissor' && Neo==='paper'){
        result.innerHTML='Neo, You Lost!'
    }       
      


                                                                                                         
}

// function clickCounter() {
//     if (localStorage.clickcount) {
//       localStorage.clickcount = Number(localStorage.clickcount)+1;
//     } else {
//       localStorage.clickcount = 1;
//     }
//     document.getElementById("score").innerHTML = localStorage.clickcount;
//   }
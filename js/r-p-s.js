//ask do you wanna playjanken
//get users choice text input
function getUsersChoice(choice){
    while (true){
    choice = window.prompt('Please enter Rock,Paper,scissors or Guu, Paa, Choki: ');
    lowerCase= choice.toLowerCase();
    if (lowerCase === 'rock' || lowerCase === 'guu'){choice = "rock";break;
}else if (lowerCase ==='paper' || lowerCase ==='paa'){choice = "paper"; break;
}else if (lowerCase === 'scissors' || lowerCase === 'choki' ){choice = "scissors"; break;
}
    }
return choice;
}
//get computer's choice
function getComputerChoice(choice){let randomNum= Math.floor(Math.random() * 3) + 1;
if (randomNum===1){ choice = "rock";
} else if (randomNum===2){ choice = "paper";
} else { choice = "scissors";}
return choice;}

//start game. Saisho wa guu (Starting with stone)
// show hands "Janken pon!"
//show winner

function play(){
let usr = getUsersChoice()
let pc = getComputerChoice()

    //you lose
if ( usr === 'rock' && pc === 'paper'){result = "you lose! Paper(Paa) beats Rock(Guu)!";
}else if (usr === 'paper' && pc === 'scissors'){result = "you lose! Scissors(Choki) beats Paper(Paa)!";
}else if (usr === 'scissors' && pc === 'rock'){result = "you lose! Rock(Guu) beats Scissors(Choki)!";
} else if  (usr === 'paper' && pc === 'rock'){result = "you win! Paper(Paa) beats Rock(Guu)!";
} else if  (usr === 'rock' && pc === 'scissors'){result = "you win! Scissor(Choki) beats Paper(Paa)!";
} else if  (usr === 'scissors' && pc === 'paper'){result = "you win! Scissors(Choki) beats Paper(Paa)!";
} else {result = "It/s a draw!";
} return result;
}

function game(){
let round=0;
let result=0;
let w=0;
let l=0;
let tie=0
for (let i=0; i<5;i++){
round= play();
result=round.slice(0,8);
if (result==='you win!'){w++;
}else if (result==="you lose"){l++;}
else {tie++;}
console.log("Round: " + (i+1));
console.log(round);
console.log("score" + " W:" +w+" L:"+l+" Tie:"+tie);
    }
}
game()
//play again


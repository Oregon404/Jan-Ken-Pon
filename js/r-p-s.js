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
console.log("Users choice: " + choice);
return choice;
}
//get computer's choice
function getComputerChoice(choice){let randomNum= Math.floor(Math.random() * 3) + 1;
if (randomNum===1){ choice = "rock";
} else if (randomNum===2){ choice = "paper";
} else { choice = "scissors";}
console.log("pc Choice: " + choice);
return choice;}

//start game. Saisho wa guu (Starting with stone)
// show hands "Janken pon!"
//show winner
const usr = getUsersChoice()
console.log(usr);
const pc = getComputerChoice()
console.log(pc);
function game(){
    //you lose
if ( usr === 'rock' && pc === 'paper'){return "you lose! Paper(Paa) beats Rock(Guu)!";
}else if (usr === 'paper' && pc === 'scissors'){return "you lose! Scissors(Choki) beats Paper(Paa)!";
}else if (usr === 'scissors' && pc === 'rock'){return "you lose! Rock(Guu) beats Scissors(Choki)!";
} else if  (usr === 'paper' && pc === 'rock'){return "you win! Paper(Paa) beats Rock(Guu)!";
} else if  (usr === 'rock' && pc === 'scissors'){return "you win! Scissor(Choki) beats Paper(Paa)!";
} else if  (usr === 'scissors' && pc === 'paper'){return "you win! Scissors(Choki) beats Paper(Paa)!";
} else {return "It/s a draw!";
}
}
console.log(game());
//play again


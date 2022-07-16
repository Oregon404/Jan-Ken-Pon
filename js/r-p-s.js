//ask do you wanna playjanken
//get users choice text input
function getUsersChoic(choice){
    while (true){
    choice = window.prompt('Please enter Rock,Paper,scissors or Guu, Paa, Choki: ');
    lowerCase= choice.toLowerCase();
    if (lowerCase === 'rock' || lowerCase === 'guu'){ choice = "Guu!!(Rock)";break;
}else if (lowerCase ==='paper' || lowerCase ==='paa'){ choice = "Paa!(Paper)"; break;
}else if (lowerCase === ' scissors' || lowerCase === 'choki' ){choice = "Choki!!(Scissors)"; break;
}
    }
console.log("Users choice: " + choice);
}
getUsersChoic()

//get computer's choice
function getComputerChoice(choice){let randomNum= Math.floor(Math.random() * 3) + 1;
if (randomNum===1){ choice = "Guu!!(Rock)";
} else if (randomNum===2){ choice = "Paa!(Paper)";
} else { choice = "Choki!!(Scissors)";}
console.log("pc Choice: " + choice);
return choice;}

getComputerChoice()
//start game. Saisho wa guu (Starting with stone)
// show hands "Janken pon!"
//show winner
//play again


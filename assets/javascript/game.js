let wins = 0;
let losses = 0;

let crystal1 = Math.floor(Math.random()* 12) + 1;
let crystal2 = Math.floor(Math.random()* 12) + 1;
let crystal3 = Math.floor(Math.random()* 12) + 1;
let crystal4 = Math.floor(Math.random()* 12) + 1;


let TargetNumber = 0
     
document.getElementById("target-number").text = TargetNumber;


let userScore = 0;

document.getElementById("user-score").text = userScore;
console.log(userScore)

function resetgame(){
  TargetNumber = Math.floor(Math.random()* 102) + 19;
    crystal1 = Math.floor(Math.random()* 12) + 1;
    crystal2 = Math.floor(Math.random()* 12) + 1;
    crystal3 = Math.floor(Math.random()* 12) + 1;
    crystal4 = Math.floor(Math.random()* 12) + 1;
    userScore = 0;
     
        document.getElementById("user-score").innerHTML = userScore;
        console.log(userScore)
        document.getElementById("target-number").innerHTML = TargetNumber;
console.log(TargetNumber)

}
resetgame()


function checkWins(){
    if (userScore === TargetNumber) {
        alert("You Win!");
        wins++;
        document.getElementById("wins").innerHTML = wins;
        resetgame();
    }
    else if (userScore > TargetNumber) {
        alert("You lose!");
        losses++;
        document.getElementById("losses").innerHTML = losses;
        resetgame();
    }

}
        
        document.getElementById("blue").addEventListener("click", function () {
            userScore = userScore + crystal1;
            document.getElementById("user-score").innerHTML = userScore;
            checkWins();
        });
    
        document.getElementById("orange").addEventListener("click", function () {
            userScore = userScore + crystal2;
            document.getElementById("user-score").innerHTML = userScore;
            checkWins();
        });
    
        document.getElementById("red").addEventListener("click", function () {
            userScore = userScore + crystal3;
            document.getElementById("user-score").innerHTML = userScore;
            checkWins();
            
        });
    
        document.getElementById("yellow").addEventListener("click", function () {
            userScore = userScore + crystal4;
            document.getElementById("user-score").innerHTML = userScore;
            checkWins();
            

        
        });
 
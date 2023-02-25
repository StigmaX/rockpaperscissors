//get input choice via element image
let fireChoice,
waterChoice,
earthChoice;
let result;
let gameCount = 0;

fireChoice = document.getElementById('fire');
waterChoice = document.getElementById('water');
earthChoice = document.getElementById('earth');
result = document.getElementById('result');

fireChoice.addEventListener('click', userfChoice);
waterChoice.addEventListener('click', userwChoice);
earthChoice.addEventListener('click', usereChoice);    


//randomly generate opponent choice
function opponent() {
    switch(Math.floor(Math.random()*3)) {
        case 0: 
            return 'fire';
        case 1:
            return 'water';
        case 2:
            return 'earth';
    }
    }
    
//compare the choice to determine which is the winner
//record the battle record until maximum of 5
function userfChoice() {
    if(gameCount < 5) {
        let opponentChoice = opponent();
        if(opponentChoice === 'fire') result.textContent="draw"
        else if (opponentChoice==='water') result.textContent='you lose'
        else if (opponentChoice==='earth') result.textContent='you win'
        console.log(opponentChoice);
        gameCount++;   
    }
}

function userwChoice() {
    if(gameCount < 5) {
        let opponentChoice = opponent();
        if(opponentChoice === 'water') result.textContent="draw"
        else if (opponentChoice==='earth') result.textContent='you lose'
        else if (opponentChoice==='fire') result.textContent='you win'
        console.log(opponentChoice);
        gameCount++;
    }
}

function usereChoice() {
    if(gameCount < 5) {
        let opponentChoice = opponent();
        if(opponentChoice === 'earth') result.textContent="draw"
        else if (opponentChoice==='fire') result.textContent='you lose'
        else if (opponentChoice==='water') result.textContent='you win'
        result.append(` only ${4 - gameCount} game left`)
        gameCount++;
        console.log(gameCount);
    }
}

//the one who score bigger is the winner

//provide a button to reset the game
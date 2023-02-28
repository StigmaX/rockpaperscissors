//get input choice via element image
let fireChoice,
waterChoice,
earthChoice;
let result;
let gameCount = 0;
let score = 0;
let opponentScore =0;


let yourPick = document.getElementById('yourPick');
let opponentPick = document.getElementById('opponentPick');
fireChoice = document.getElementById('fire');
waterChoice = document.getElementById('water');
earthChoice = document.getElementById('earth');
result = document.getElementById('result');
let btnAgain = document.getElementById('retry');

fireChoice.addEventListener('click', userfChoice);
waterChoice.addEventListener('click', userwChoice);
earthChoice.addEventListener('click', usereChoice);    
btnAgain.addEventListener('click', retry);

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
//get opponent choice and compare choice with user
function comparePick(opponent, user) {
    switch(opponent) {
        case 'fire':
            opponentPick.src = "/images/fire.png";
            break;
        case 'water':
            opponentPick.src = "/images/water.png";
            break;
        case 'earth':
            opponentPick.src = "/images/earth.png";
            break;            
    }
    switch(user) {
        case 'fire':
            yourPick.src = "/images/fire.png";
            break;
        case 'water':
            yourPick.src = "/images/water.png";
            break;
        case 'earth':
            yourPick.src = "/images/earth.png";
            break;            
    }
}
    
//compare the choice to determine which is the winner
//record the battle record until maximum of 5
function userfChoice() {
    if(gameCount < 5) {
        let opponentChoice = opponent();
        comparePick(opponentChoice, 'fire');
        if(opponentChoice === 'fire') {result.textContent="draw";}
        else if (opponentChoice==='water') {result.textContent='you lose'; opponentScore++;}
        else if (opponentChoice==='earth') {result.textContent='you win'; score++; }
        if(gameCount!=4)result.append(` only ${4 - gameCount} game left`)
        gameCount++;
        if(gameCount===5)gameResult(score, opponentScore);
        console.log(gameCount);
    }
}

function userwChoice() {
    if(gameCount < 5) {
        let opponentChoice = opponent();
        comparePick(opponentChoice, 'water');
        if(opponentChoice === 'water') {result.textContent="draw";}
        else if (opponentChoice==='earth') {result.textContent='you lose'; opponentScore++;}
        else if (opponentChoice==='fire') {result.textContent='you win'; score++;}
        if(gameCount!=0)result.append(` only ${4 - gameCount} game left`)
        gameCount++;
        if(gameCount===5)gameResult(score, opponentScore);
        console.log(gameCount);
    }
}

function usereChoice() {
    if(gameCount < 5) {
        let opponentChoice = opponent();
        comparePick(opponentChoice, 'earth');
        if(opponentChoice === 'earth') {result.textContent="draw";}
        else if (opponentChoice==='fire') {result.textContent='you lose'; opponentScore++;}
        else if (opponentChoice==='water') {result.textContent='you win'; score++; }
        if(gameCount!=0)result.append(` only ${4 - gameCount} game left`)
        gameCount++;
        if(gameCount===5)gameResult(score, opponentScore);
        console.log(gameCount);
    }
}

//game result and the one who score bigger is the winner
function gameResult(score, opponentScore) {
    if(score > opponentScore) {
        result.textContent=`Congrats!, you win with score ${score} vs. ${opponentScore}`;
    }
    else if(score < opponentScore) {
        result.textContent=`Sorry!, you lose with score ${score} vs. ${opponentScore}`;
    }
    else {
        result.textContent=`Draw!, with score ${score} vs. ${opponentScore}`;
    }
    btnAgain.style.display = 'block';
}
//provide a button to reset the game

function retry() {
    gameCount = 0;
    score = 0;
    opponentScore = 0;
    btnAgain.style.display = 'none';
    result.textContent = '';
    yourPick.src = "/images/question-mark.png";
    opponentPick.src = "/images/question-mark.png";
    console.log(gameCount);
}
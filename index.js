var X = 1;
var O = 2;
let turn = X;
let turnNum = 1;
let gameStatus = 'play';
var clickEvent = 0
const XSpot = '❌';
const OSpot = '⭕';

let gameGrid = {
    1: '', 2: '', 3: '',
    4: '', 5: '', 6: '',
    7: '', 8: '', 9: '',
};

function spotSelection(id) {
    if(gameGrid[id] != '') {
        alert('Spot is taken, pick another space.');
    }else{
        if(turn == X){   
            document.getElementById(id).innerHTML = XSpot;
            gameGrid[id] = X;
        }else {
            document.getElementById(id).innerHTML = OSpot;
            gameGrid[id] = O;
        }
}};
//Grid Click Detector
document.getElementById('1').addEventListener('click', () => {spotSelection(1)});
document.getElementById('2').addEventListener('click', () => {spotSelection(2)});
document.getElementById('3').addEventListener('click', () => {spotSelection(3)});
document.getElementById('4').addEventListener('click', () => {spotSelection(4)});
document.getElementById('5').addEventListener('click', () => {spotSelection(5)});
document.getElementById('6').addEventListener('click', () => {spotSelection(6)});
document.getElementById('7').addEventListener('click', () => {spotSelection(7)});
document.getElementById('8').addEventListener('click', () => {spotSelection(8)});
document.getElementById('9').addEventListener('click', () => {spotSelection(9)});

document.getElementById('resetBtn').addEventListener('click', () =>{   
    for(let i = 1; i < Object.keys(gameGrid).length+1; i++){
        gameGrid[i] = '';
        document.getElementById(i).innerHTML = '';
        turnNum = 1;
        turn = X
        playerBg(turn)
        clickEvent = 0;
        gameStatus = 'play'
        document.getElementById('messageDis').innerHTML = 'Play again'
    }
})
function GameOver() {
    if(turnNum > 4) {
        if(gameGrid[1]===gameGrid[2]&&gameGrid[2]===gameGrid[3]&&gameGrid[1]===gameGrid[3]||
        gameGrid[4]===gameGrid[5]&&gameGrid[5]===gameGrid[6]&&gameGrid[4]===gameGrid[6]||
        gameGrid[7]===gameGrid[8]&&gameGrid[8]===gameGrid[9]&&gameGrid[7]===gameGrid[9]||
        gameGrid[1]===gameGrid[5]&&gameGrid[5]===gameGrid[9]&&gameGrid[1]===gameGrid[9]||
        gameGrid[3]===gameGrid[5]&&gameGrid[5]===gameGrid[7]&&gameGrid[3]===gameGrid[7]||
        gameGrid[1]===gameGrid[4]&&gameGrid[4]===gameGrid[7]&&gameGrid[1]===gameGrid[7]||
        gameGrid[5]===gameGrid[2]&&gameGrid[5]===gameGrid[8]&&gameGrid[2]===gameGrid[8]||
        gameGrid[3]===gameGrid[6]&&gameGrid[6]===gameGrid[9]&&gameGrid[3]===gameGrid[9]){
            return 'win'
        }else{
            return 'play'
        }
        
    }else if(turnNum == 9){
        return 'tie'
    } 
    else {
        return 'play'
    }
}
    
    
function newTurn(){
    gameStatus = GameOver(); 
    
    if(gameStatus==='win'){
        switch(turn){
            case X:
                document.getElementById('messageDis').innerHTML = 'Player 1 IS THE WINNER!!!'
                break;
            case O:
                document.getElementById('messageDis').innerHTML = 'Player 2 IS THE WINNER!!!'
                break;
        }
    }else if(gameStatus ==='tie'){
        document.getElementById('messageDis').innerHTML = 'Game is a tie.';
    }
    else{
        if(turn === X){
            turnNum += 1;
            return(turn = O);
        }else {
            turnNum += 1;
            return(turn = X);
        }
    }
}
function playerBg(turn){
    if(turn === X){
        document.getElementById('p1Display').classList.add("text-bg-primary");
        document.getElementById('p2Display').classList.remove("text-bg-primary");
    }else if(turn === O){
        document.getElementById('p2Display').classList.add("text-bg-primary");
        document.getElementById('p1Display').classList.remove("text-bg-primary");
    }
}

playerBg(turn)

class Game {
    constructor() {
    }
    start(){
        document.getElementById('mTable').addEventListener('click', () =>{
            clickEvent += 1;
            console.log(clickEvent)
            while(clickEvent===turnNum){
            if(gameStatus=='tie'||gameStatus=='win'){
                break
            }else{
                newTurn();
                playerBg(turn);
                console.log(gameStatus);
        }}})}};
let game = new Game;
game.start();


var X = 1;
var O = 2;
let turn = X;
let turnNum = 1;
let gameStatus = '';

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
            document.getElementById(id).p.innerHTML = OSpot;
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
        
    }console.log(gameGrid)
})
function GameOver() {
    if(gameGrid[1]===gameGrid[2]&&gameGrid[2]===gameGrid[3]&&gameGrid[1]===gameGrid[3]||
       gameGrid[4]===gameGrid[5]&&gameGrid[5]===gameGrid[6]&&gameGrid[4]===gameGrid[6]||
       gameGrid[7]===gameGrid[8]&&gameGrid[8]===gameGrid[9]&&gameGrid[7]===gameGrid[9]||
       gameGrid[1]===gameGrid[5]&&gameGrid[5]===gameGrid[9]&&gameGrid[1]===gameGrid[9]||
       gameGrid[3]===gameGrid[5]&&gameGrid[5]===gameGrid[7]&&gameGrid[3]===gameGrid[7]||
       gameGrid[1]===gameGrid[4]&&gameGrid[4]===gameGrid[7]&&gameGrid[1]===gameGrid[7]||
       gameGrid[5]===gameGrid[2]&&gameGrid[5]===gameGrid[8]&&gameGrid[2]===gameGrid[8]||
       gameGrid[3]===gameGrid[6]&&gameGrid[6]===gameGrid[9]&&gameGrid[3]===gameGrid[9]) {
        return 'win'
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
            return(turn = O);
        }else {
            return(turn = X);
        }
    }
}
function playerBg(turn){
    if(turn === X){
        document.getElementById('p1Display').classList.add("text-bg-primary");
    }else if(turn === O){
        document.getElementById('p2Display').classList.add("text-bg-primary");
    }
}
playerBg(turn)


class Game {}
    constructor();{
    }
    start()
    while(gameStatus != 'tie'||gameStatus != 'win') {
        document.getElementById('messageDis').innerHTML = `It's player ${turn} turn.`;
        document.getElementById('mTable').addEventListener('click', () =>{
            newTurn();

        });
        


    }

let game = new Game;
game.start()
/*class Menu {
    constructor(){
    }
    start(){
        let mainDis = document.getElementById('messageDis')
        mainDis.innerHTML = "Player 1 to start."
        document.getElementById('mTable').addEventListener('click', () =>{
            turnNum += 1;
            turn = O
            mainDis.innerHTML = '';
        });
        while(turnNum < 9) {
            if(turn == X){
                mainDis.innerHTML = 'Player 1 to select'
                document.getElementById('mTable').addEventListener('click', () => {
                    turn = O;
                    turnNum += 1;
                })
            }else {
                mainDis.innerHTML = 'Player 2 to select';
                document.getElementById('mTable').addEventListener('click', () => {
                    turn = X;
                    turnNum += 1;
                })
            }
        }
    }
}*/

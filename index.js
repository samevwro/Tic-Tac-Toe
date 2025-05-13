const { createElement } = require("react");

var X = 1;
var O = 2;

let turn = X;
const XSpot = document.createTextNode('❌');
const OSpot = document.createTextNode('⭕');

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
            document.getElementById(id) }
    }
}
document.getElementById('3').innerHTML('');

var numSquares = 6;
var colors = randomColorGenerate(numSquares);

var squares = document.querySelectorAll('.square');
var pickedColor = pickedColors();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#messageDisplay');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#resetBtn');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener('click', function () {
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');

    numSquares = 3;
    colors = randomColorGenerate(numSquares);
    pickedColor = pickedColors(); 
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {

        if(colors[i]) {       
          squares[i].style.backgroundColor = colors[i];
        }

        else {
            squares[i].style.display = 'none';
        }
    }
    
});

hardBtn.addEventListener('click', function () {
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');

    numSquares = 6;
    colors = randomColorGenerate(numSquares);
    pickedColor = pickedColors(); 
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {    
          squares[i].style.backgroundColor = colors[i];
          squares[i].style.display = 'block';
    }
});

resetButton.addEventListener('click', function () {

    // Change random color generate
    colors = randomColorGenerate(numSquares);
    //add picked color 
    pickedColor = pickedColors();
    //change display color 
    colorDisplay.textContent = pickedColor;
    //loop through
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = colors[i];

    }

    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = '';
    this.textContent='New Colors'


});


for (var i = 0; i < squares.length; i++) {

    //add initial color
    squares[i].style.backgroundColor = colors[i];

    //add clickListener
    squares[i].addEventListener('click', function () {

        //grab color of the click listener
        var clickedColor = this.style.backgroundColor;

        //compare to picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!';
            changeColor(clickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = 'Play Again?'

        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again';
        }
    });

}




function changeColor(color) {
    //loop through all square 
    for (var i = 0; i < squares.length; i++) {

        //change each color to given color 
        squares[i].style.backgroundColor = color;
    }
}


function randomColorGenerate(num) {
    //make an array
    var arr = [];

    // repeat num times
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    //Return array
    return arr;

}

function pickedColors() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function randomColor() {

    //make red 0 -255
    var r = Math.floor(Math.random() * 256);

    //make green 0 -255    
    var g = Math.floor(Math.random() * 256);

    //make blue 0 -255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
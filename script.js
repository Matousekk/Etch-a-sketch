const container = document.querySelector('#grid-container');
const changeSize = document.querySelector('#knobLeft');
const resetGrid = document.querySelector('#shakeBtn');
const rgbButton = document.querySelector('#knobRight');
let rgbIsClicked = false;

//Generate grid based on user input
changeSize.addEventListener('click', () => {
    //createGrid(prompt('Choose number from 2 to 80'));
    const userNumber = prompt('Choose number from 2 to 80');
    if (userNumber > 80 || userNumber < 2) {
        alert('Incorrect number entered');
    }   else createGrid(userNumber);
});

//reset grid to blank
resetGrid.addEventListener('click', () => {
    container.innerHTML = '';
});

//toggle button for RGB coloring
rgbButton.addEventListener('click', () => {
    rgbIsClicked = !rgbIsClicked;
})

//loops until user input number reached
//mouse coloring function
function createGrid(quantity) {
    container.innerHTML = '';
    const squareSize = 562 / quantity;

    for (let i = 0; i < quantity * quantity; i++) {
        const square = document.createElement('div');
        square.style.width =  squareSize + 'px';
        square.style.height = squareSize + 'px';
        square.style.outline = '0.2px solid grey';
        container.appendChild(square);

        square.addEventListener ('mouseleave', () => {
            if (rgbIsClicked == false) {
                square.style.backgroundColor = 'black';
            }   else if (rgbIsClicked == true) {
                const red = Math.round(Math.random() * 255);
                const green = Math.round(Math.random() * 255);
                const blue = Math.round(Math.random() * 255);
                square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            }
        });
    };
    console.log(rgbIsClicked);
};

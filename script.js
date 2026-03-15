const container = document.querySelector('#grid-container');
const changeSize = document.querySelector('#knobLeft');

knobLeft.addEventListener('click', () => {
    createGrid(prompt('Choose number from 2 to 80'));
});


function createGrid(quantity) {
    container.innerHTML = '';
    const squareSize = 562 / quantity;

    for (let i = 0; i < quantity * quantity; i++) {
        const square = document.createElement('div');
        square.style.width =  squareSize + 'px';
        square.style.height = squareSize + 'px';
        square.style.outline = '0.2px solid grey';
        container.appendChild(square);

        square.addEventListener ('mousemove', () => {
            square.style.backgroundColor = 'black';
        });
    };
};


//grid hover effect
//grid color reset
//rgb button
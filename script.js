const container = document.querySelector('.container');

function createGrid(quantity) {
    container.innerHTML = '';
    const squareSize = 800 / quantity;

    for (let i = 0; i < quantity * quantity; i++) {
        const square = document.createElement('div');
        square.style.width =  squareSize + 'px';
        square.style.height = squareSize + 'px';
        square.style.outline = '2px solid black';
        container.appendChild(square);
    }
}

createGrid(100);

//make divs grow into parent
//make divs into small squares
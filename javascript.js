var mouseDown  = 0;

function createGrid(size){
    const grid = document.querySelector(".grid");
    div.addEventListener("click",); //Check if the div has been clicked on
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size*size); i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare)
        square.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend", square);
    }
}

createGrid(16);

function colorSquare(){
    this.style.backgroundColor = "black";
}

function mouseclick(){
    ++mouseDown;
}
//https://stackoverflow.com/questions/322378/javascript-check-if-mouse-button-down







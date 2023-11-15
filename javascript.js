var mouseDown = 0;
function createGrid(size){
    const grid = document.querySelector(".grid");
    let currentSquares = grid.querySelectorAll("div");
    currentSquares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size*size); i++){
        let newSquare = document.createElement("div");
        newSquare.addEventListener("mouseover", colorSquare)
        newSquare.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend", newSquare);
    }
}

//Initialise Grid 
createGrid(16); 

function colorSquare(){
    if (mouseDown != 0) 
    this.style.backgroundColor = "black";
}

document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}











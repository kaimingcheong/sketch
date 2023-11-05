function createGrid(size){
    let grid = document.querySelector(".grid");
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size*size); i++){
        let square = document.createElement("div");
        square.addEventListener("click ", colorSquare)
        square.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend", square);
    }
}

createGrid(16);

function colorSquare(){
    this.style.backgroundColor = "black";
}
 
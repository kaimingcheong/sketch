function makeGrid(length){
    //Can use this but for accuracy we can use ID's 
    //const e = document.grid; or alternatively 
    //const grid = document.getElementById("grid")

    const grid = document.querySelector('#grid');
    
    for (var i = 0; i < length; i++){
        var row = document.createElement('div');
        row.className = 'row';
        for (var j = 1; j <= length; j++){
            var cell = document.createElement('div');
            cell.className('gridSquare');
            cell.innerText = (i * length) + j;
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}
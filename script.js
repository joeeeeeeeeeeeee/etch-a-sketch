

function randomColor(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function populateCanvas(gridWidth){
    clearCanvas();
    let canvas = document.querySelector('#canvas');
    let i = gridWidth;
    canvas.style["grid-template-columns"] = `repeat(${gridWidth} , 1fr)`;
    canvas.style["grid-template-rows"] = `repeat(${gridWidth} , 1fr)`;
    let gridArea = Math.pow(gridWidth,2);
    for(let i = 0; i<gridArea;i++){
        canvas.appendChild(document.createElement('div'))
        .addEventListener("mouseenter", (e) =>{
            let color = document.querySelector('#color').value;
            if(color === "random"){
              e.target.style["background-color"] = randomColor();
            } else{
              e.target.style["background-color"] = color;
            }
        });
    }
}
function clearCanvas(){
    let canvas = document.querySelector('#canvas');
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}
document.querySelector('#grid-size-submit').addEventListener('click', () => {
  let gridSize = document.querySelector("#grid-size").value;
  gridSize = parseInt(gridSize,10);
  if (gridSize < 1 || gridSize > 200){
      alert("grid size must be greater than 0 and less than 200");
      return;
  }
  populateCanvas(gridSize);
});
populateCanvas(16);
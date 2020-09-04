const squarespace = document.getElementById("squarespace")
const clear_btn = document.getElementById("clearbutton")
const Rainbow_btn = document.getElementById("rainbowbutton")
const resize_btn = document.getElementById("resizing")
let RBW_CLRS = false
let defaultcolor = "red"
let root = document.documentElement; 
let pixels = getComputedStyle(root).getPropertyValue("--row-num")

createGrid()

function createGrid(){

    for(j=0; j<pixels*pixels ;j++){
        const element = document.createElement("div");
        const classAtr = document.createAttribute("class")
        classAtr.value = "square"
        element.setAttributeNode(classAtr);
        squarespace.appendChild(element);
        element.addEventListener("mouseover", colorchange);
    }
}

function deleteGrid(){
    squarespace.innerHTML = " " 
}

resize_btn.addEventListener("click", resizingGrid);

clear_btn.addEventListener("click", clearBoard);

Rainbow_btn.addEventListener("click", switchRainbow)


function resizingGrid(){
    let userInput = whatuwant() 
    let squareSize =parseInt(getComputedStyle(root).getPropertyValue("--square-size"), 10)
    squareSize*= pixels/userInput
    root.style.setProperty("--row-num",userInput)
    root.style.setProperty("--col-num",userInput)
    root.style.setProperty("--square-size",squareSize + "px")
    pixels = userInput
    deleteGrid()
    createGrid()
}

function whatuwant(){
    let userInput = prompt("Which Grid-Size do you want (0-100) ?")
    if (isNaN(userInput)){
        return whatuwant()
    }
    else if( 0 > userInput ){
        return whatuwant()
    }
    else if( 100 < userInput ){
        return whatuwant()
    }
    else{
        return userInput
    }
}

function colorchange(){

    if(RBW_CLRS){
        this.style.backgroundColor = getRandomColor();
    }
    else{
        this.style.backgroundColor = defaultcolor;
    }
}

function switchRainbow(){
    RBW_CLRS = !RBW_CLRS
}

function clearBoard(){

    var c = squarespace.children;
    
    for(i=0; i<c.length; i++){
        c[i].style.backgroundColor = "grey";
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
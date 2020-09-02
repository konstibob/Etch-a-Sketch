const squarespace = document.getElementById("squarespace")
const clear_btn = document.getElementById("clearbutton")
const Rainbow_btn = document.getElementById("rainbowbutton")
let RBW_CLRS = false
let defaultcolor = "red"


for(i=0; i<16; i++){
    // const br = document.createElement("br");
    // squarespace.appendChild(br);

    for(j=0; j<16; j++){
        const element = document.createElement("div");
        const classAtr = document.createAttribute("class")
        classAtr.value = "square"
        element.setAttributeNode(classAtr);
        squarespace.appendChild(element);
        element.addEventListener("mouseover", colorchange);
    }
}


clear_btn.addEventListener("click", clearBoard);

Rainbow_btn.addEventListener("click", switchRainbow)

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
  
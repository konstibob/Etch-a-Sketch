const squarespace = document.getElementById("squarespace")
let color ="red"


for(i=0;i<16;i++){
    const br = document.createElement("br");
    squarespace.appendChild(br);

    for(j=0;j<16;j++){
        const element = document.createElement("div");
        const classAtr = document.createAttribute("class")
        classAtr.value ="square"
        element.setAttributeNode(classAtr);
        squarespace.appendChild(element);
        element.addEventListener("mouseover", colorchange);
    }
}

function colorchange(){

    this.style.backgroundColor = color;

}

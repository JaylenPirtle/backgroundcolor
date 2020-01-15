// Access CSS properties VIA JS

//Events: onmouseover,onmouseout, onmousedown, onmouseup

let changeBackground = function(){

    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");

    box1.style.backgroundColor = "green";
    box2.style.backgroundColor = "blue";
    box3.style.backgroundcolor = "yellow";

    box1.innerText = "Hi";
    box2.innerText = "my name is";
    box3.innerText = "indigo Montoya"

};

let setOringinal = function(){
    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");

    box1.style.backgroundColor = "red";
    box2.style.backgroundColor = "red";
    box3.style.backgroundcolor = "red";

    box1.innerText = "OVER";
    box2.innerText = "ENTER";
    box3.innerText = "DOWN";
};

let showHidden = function(){
    document.getElementById("hidden").innerText = "You've found the secret";

};

let mouseOver = function(id){

    id.style.backgroundColor = "yellow";
    id.innerText = "HELLO";
};
let mouseOut = function () {
    id.style.backgroundColor = "red";
    if(id === document.getElementById('block1')){
        id.innerText = "OVER"
    }else if(id === document.getElementById("block2")){
        id.innerText = "ENTER";
    }else
        id.innerText = "DOWN";
};

let addclass = function(id){

    id.classList.add("blueBigBold");

};

let removeClass = function(id){
    id.classList.remove("blueBigBold");
};

let toggleClass = function(id){
    id.classList.toggle("blueBigBold");
};
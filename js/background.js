// image index
let index=0;

function changeImage(){

    let x = document.getElementsByClassName("image");
    for(let i=0; i<x.length;i++){
        x[i].style.display = "none"; 
    }
    index++;    
    if(index>x.length){
        index = 1;
    }
    x[index-1].style.display="block";
    setTimeout(changeImage, 10000);
}

function init(){
    changeImage();
    
}

init();

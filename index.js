const containerId = document.getElementById('img-container');

function rightScroll(){
containerId.scrollLeft = containerId.scrollLeft + 30; 
console.log(containerId.scrollLeft);
}

function leftScroll(){
    containerId.scrollLeft = containerId.scrollLeft - 30; 
    console.log(containerId.scrollLeft);
    if(containerId.scrollLeft == 0){
        console.log("Final output has reached")
    }
}
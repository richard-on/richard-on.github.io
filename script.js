

    let gridElems = document.getElementsByClassName("gridItem");
    for (let i = 0; i < gridElems.length; i++) {
        gridElems[i].style.backgroundColor = getRandomRgb();
    }

function getRandomRgb(){
    let r = Math.floor(getRandomValues(0, 255));
    let g = Math.floor(getRandomValues(0, 255));
    let b = Math.floor(getRandomValues(0, 255));
    return `rgb(${r}, ${g}, ${b})`
}

function getRandomValues(min, max){
    return Math.random() * (max - min) + min;
}
console.log("HI");
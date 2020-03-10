function changeImg(evt) {
    let srcImg = evt.src;
    if (srcImg.indexOf("eagle") > 0) {
        evt.src = "./img/horse.jpg";
    } else if (srcImg.indexOf("horse") > 0) {
        evt.src = "./img/kittens.jpg";
    } else if (srcImg.indexOf("kittens") > 0) {
        evt.src = "./img/kitty.jpg";
    } else if (srcImg.indexOf("kitty") > 0) {
        evt.src = "./img/tiger.jpg";
    } else evt.src = "./img/eagle.jpg";
}

/*
var lastChoice = 0;
let count = 0;

function getSrc(val) {
    if (lastChoice === val) {
        count++;
    } else
        count = 0;
    if (count === 4)
        alert("Duplicate");
    lastChoice = val;
}
*/

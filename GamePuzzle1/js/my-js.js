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
    checkFullimg();
}

function checkFullimg() {
    let imgSrc1 = document.getElementById("myImg1");
    let imgSrc2 = document.getElementById("myImg2");
    let imgSrc3 = document.getElementById("myImg3");
    let imgSrc4 = document.getElementById("myImg4");
    if (imgSrc1.alt === "1" && imgSrc2.alt === "2" && imgSrc3.alt === "3" && imgSrc4.alt === "4") {
        alert("Bingo");
    }
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

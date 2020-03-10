function init() {
let buttonMove = document.getElementById("no");
buttonMove.style.position = 'relative';
buttonMove.style.left = '0px';
buttonMove.style.top = '0px';
}

window.onload = init;
window.innerWidth = 1280;
window.innerHeight = 720;

function disagree() {
    let widthWindow = window.innerWidth;
    let heightWindow = window.innerHeight;
    let buttonMove = document.getElementById("no");
    buttonMove.style.left =  Math.random()*widthWindow + 'px';
    buttonMove.style.top = Math.random()*heightWindow + 'px';
    buttonMove.style.position = 'fixed';
    buttonMove.onclick = function () {
        alert("Thật luôn?");
    }
}

function agree() {
    alert("Mỡ đấy mà húp");
}
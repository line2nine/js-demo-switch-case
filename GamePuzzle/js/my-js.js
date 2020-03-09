function changeImg() {
    let imObj = document.getElementById("myImg").src;
    if (imObj === "img/persian.jpg") {
        document.getElementById("myImg").src = "img/scottish.jpg";
    }
    else {
        document.getElementById("myImg").src = "img/persian.jpg";
    }
}

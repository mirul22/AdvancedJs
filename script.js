function displayRandomImg() {
    const imgArray = ["img/cat-1.jpg", "img/cat-2.jpg", "img/cat-3.jpg", "img/cat-4.jpg", "img/cat-5.jpg"];

    var num = Math.floor(Math.random() * (imgArray.length));
    document.body.style.backgroundImage = 'url(' + imgArray[num] + ')';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = "cover";
}


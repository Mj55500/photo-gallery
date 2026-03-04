function upDate(previewPic) {

    console.log("Наведение работает!");
    console.log("alt:", previewPic.alt);
    console.log("src:", previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}


function unDo() {

    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML =
        "Наведите курсор на изображение ниже, чтобы отобразить его здесь";
}
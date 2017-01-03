window.addEventListener("resize", function(e) {
    var resize = document.getElementsByClassName("resize");
    
    for (var i = 0; i < resize.length; i++) {
        resize[i].style.width = resize[i].offsetHeight * .2;
    }
});
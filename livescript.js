let sky = document.getElementById("sky");
let moon = document.getElementById("moon");
let bird = document.getElementById("bird");
let gardan = document.getElementById("gardan");
let s = document.getElementById("s");

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    sky.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    bird.style.top = -value * 0.15 + 'px';
    gardan.style.top = value * 0.15 + 'px';
    s.style.top = value * 1 + 'px';
});
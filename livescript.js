let sky = document.getElementById("sky");
let moon = document.getElementById("moon");
let bird = document.getElementById("bird");
let gardan = document.getElementById("gardan");
let s = document.getElementById("s");

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    sky.style.top = value * 0.5 + 'px';
    moon.style.left = value * 1 + 'px';
    bird.style.left = value * 0.5 + 'px';
  bird.style.transition="0.5s ease";
  bird.style.transform="rotate(14deg)";
 bird.style.transform="rotate(-7deg)"; bird.style.transform="rotate(7deg)";
   
    gardan.style.top = value * 1 + 'px';
    s.style.top = value * 1 + 'px';
});

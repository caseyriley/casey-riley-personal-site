window.addEventListener("DOMContentLoaded", () => {

  const bannerC = document.getElementById("banner-c");
  const ring = document.getElementById("ring");
  const colorWash = document.getElementById("color-wash");
  const colorWash2 = document.getElementById("color-wash2");
  const bubble = document.getElementById("bubble");
 

  let colorState = false;

  function toggleColorState(){
  
    colorState = !colorState;
 
    bannerC.classList.add(`${colorState ? "dim" : "lit"}`)
    bannerC.classList.remove(`${colorState ? "lit" : "dim"}`)
    ring.classList.add(`${colorState ? "ring-on" : "ring-off"}`)
    ring.classList.remove(`${colorState ? "ring-off" : "ring-on"}`)
    colorWash.classList.add(`${colorState ? "color-lit" : "color-dim"}`)
    colorWash.classList.remove(`${colorState ? "color-dim" : "color-lit"}`)
    colorWash2.classList.add(`${colorState ? "color-lit" : "color-dim"}`)
    colorWash2.classList.remove(`${colorState ? "color-dim" : "color-lit"}`)
  }

  bannerC.onmouseenter = function() {toggleColorState()};
  bubble.onclick = function() {toggleColorState()};
})
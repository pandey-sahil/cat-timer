var h1 = document.querySelector("h1")
var btn = document.querySelector("button")
var imgg = document.querySelector("img")
// tl = gsap.timeline()

var grow = 0

setInterval(function(){
  if(grow<100){
    grow += Math.floor(Math.random()*15)
    h1.innerHTML = grow + "%"
  }else{
    grow = 100
    h1.innerHTML = grow + "%"
    setTimeout(function(){
        h1.style.display="none"
        btn.style.display="initial"
        imgg.style.display="initial"
        
    }, 1000)
  }
}, Math.floor(Math.random()*350))

document.getElementById('javascript-extendable')
.addEventListener('mouseover',function(){
// set width directly
document.getElementById('javascript-extendable').style.width='20vmin';
})
document.getElementById('javascript-extendable')
.addEventListener('mouseout',function(){
// set width directly
document.getElementById('javascript-extendable')
.setAttribute('style','width:10vmin;')
})
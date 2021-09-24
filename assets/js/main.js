let modeToggle = document.querySelector('.togglerMode');
let body = document.querySelector('body');
modeToggle.addEventListener('click',function(){
   body.classList.toggle('dark') 
})
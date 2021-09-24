let modeToggle = document.querySelector('.togglerMode');
let harmburger = document.querySelector('.harmburger');
let navList = document.querySelector('header ul');
let body = document.querySelector('body');

modeToggle.addEventListener('click',function(){
   body.classList.toggle('dark') 
})

harmburger.addEventListener('click',()=>{
   navList.classList.toggle('show')
})
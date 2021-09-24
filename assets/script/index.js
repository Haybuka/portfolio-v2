let harmburger = document.querySelector('.nav-toggle');
let body = document.querySelector('body');

harmburger.addEventListener('click',function(){
    let navbarNav = document.querySelector('.navbar-nav');
    let imgSrc = this.querySelector('img');

    //toggle show classes for elements
    body.classList.toggle('toggle')
    navbarNav.classList.toggle('show')
    
    //to toggle icon on harmburger
    if(imgSrc.src.includes('harmburger')){
        console.log('includes harm')
        imgSrc.setAttribute('src','/assets/image/logo/close-nav.svg')
    }else{
        imgSrc.setAttribute('src','/assets/image/logo/harmburger.svg')

    }
})

AOS.init();


// var options = {
//     strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//     typeSpeed: 40
//   };
  
//   var typed = new Typed('.element', options);
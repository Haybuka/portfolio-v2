let harmburger = document.querySelector('.nav-toggle');
let body = document.querySelector('body');
let modeToggle = [...document.querySelectorAll('.mode')]
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


modeToggle.forEach(mode=>{
    mode.addEventListener('click',function(){
        let lightMode = document.querySelector('.light-mode')
        let darkMode = document.querySelector('.dark-mode')
        if(this.className.includes('dark-mode')){
           lightMode.classList.toggle('mode-view')  
           darkMode.classList.toggle('mode-view')

        } else if(this.className.includes('light-mode')){
           darkMode.classList.toggle('mode-view')
           lightMode.classList.toggle('mode-view')      

        }
        console.log(this)
        body.classList.toggle('dark')
        
    })
})
AOS.init();
let typed = new Typed('#newString', {
         stringsElement: '.new-strings'
       });
     
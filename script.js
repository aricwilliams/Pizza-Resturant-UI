$('.nav a').on('click', function (e) {
    if (this.hash !== '') {
            e.preventDefault();
        
            const hash = this.hash;
        
            $('html, body')
              .animate({
                scrollTop: $(hash).offset().top
              },500);
          }
    });

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.nav');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
 };
 

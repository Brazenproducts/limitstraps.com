// Nav toggle
document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.main-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',nav.classList.contains('open'));
    });
    document.addEventListener('click',function(e){
      if(!toggle.contains(e.target)&&!nav.contains(e.target)){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var target=document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        if(nav)nav.classList.remove('open');
      }
    });
  });
});

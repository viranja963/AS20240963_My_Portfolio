
document.addEventListener('DOMContentLoaded', function() {
    
    const roles = [
        'Web Developer',
        'UI/UX Designer',
        'Software Engineer',
        'Devops Engineer',
        'Problem Solver'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedTextElement = document.getElementById('typed-text');
    
    
    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
           
            typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
           
            typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
       
        let speed = isDeleting ? 50 : 100;
        
        
        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2000; 
            isDeleting = true;
        } 
       
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 500; 
        }
        
        setTimeout(typeEffect, speed);
    }
    
  
    typeEffect();
});


const navbar = document.getElementById('navbar');


window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

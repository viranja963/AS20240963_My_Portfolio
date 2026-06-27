
document.addEventListener('DOMContentLoaded', function() {
    
    const roles = [
        
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


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');




hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});



const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           
            navItems.forEach(item => item.classList.remove('active'));
            
           
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, {
    threshold: 0.5 });

   sections.forEach(section => observer.observe(section));


   
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0%';
            
            
            setTimeout(() => {
                progressBar.style.width = width;
            }, 100);
        }
    });
}, {
    threshold: 0.5
});

skillBars.forEach(bar => skillObserver.observe(bar));



// 6. CONTACT FORM HANDLING
// ============================================================
const contactForm = document.getElementById('contactForm');


contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();
    
  
    if (!name || !email || !message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }
    
   
    if (!email.includes('@') || !email.includes('.')) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
   
    showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
    this.reset();
});




function showFormMessage(message, type) {
   
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    messageElement.style.cssText = `
        padding: 15px 20px;
        border-radius: 10px;
        margin-top: 20px;
        font-weight: 600;
        ${type === 'success' 
            ? 'background: rgba(78, 205, 196, 0.2); color: #4ecdc4; border: 1px solid #4ecdc4;' 
            : 'background: rgba(255, 107, 107, 0.2); color: #ff6b6b; border: 1px solid #ff6b6b;'
        }
        animation: fadeIn 0.5s ease;
    `;
    
   
    contactForm.appendChild(messageElement);
    
   
    setTimeout(() => {
        messageElement.style.opacity = '0';
        messageElement.style.transition = 'opacity 0.5s ease';
        setTimeout(() => messageElement.remove(), 500);
    }, 5000);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
           
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});



const revealElements = document.querySelectorAll(
    '.skill-card, .project-card, .stat-card, .timeline-item'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => revealObserver.observe(element));


document.addEventListener('keydown', function(e) {
    
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});


console.log('%c🎨 Portfolio Website', 'font-size: 24px; font-weight: bold; color: #6c63ff;');
console.log('%cDesigned and developed with ❤️', 'font-size: 16px; color: #888;');
console.log('%cCheck out the code on GitHub!', 'font-size: 14px; color: #4ecdc4;');
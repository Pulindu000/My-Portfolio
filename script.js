let aboutBtn = document.getElementById("aboutme");
let aboutBtnNav = document.getElementById("nav-about");
let aboutPage = document.getElementById("aboutPage");
let pageloader = document.getElementById("preloader");
let page = document.getElementById("page");
let homeDes = document.getElementById("des");
let homePage = document.getElementById('home');
let homeBtn = document.getElementById("homeBtn");
let contact = document.getElementById('contact');

// Animation
const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

const elementsToAnimate = document.querySelectorAll('.animate-me');
elementsToAnimate.forEach((el) => observer.observe(el));


// Home Button Oberver 



// Functioning
aboutBtnNav.addEventListener('click', () => {
    aboutPage.scrollIntoView({
        behavior: 'smooth'
    });
});

homeBtn.addEventListener('click', () => {
    homePage.scrollIntoView({
        behavior: "smooth"
    });
});

window.addEventListener("load", function () {
    pageloader.style.opacity = "1";
    setTimeout(function () {
        pageloader.style.display = "none";

        setTimeout(function () {
            pageloader.style.display = "none";
        }, 300);
        page.style.opacity = "1";
        page.style.display = "block";
        homeDes.style.display = "block";
    }, 2000);
    
    setTimeout(function () {
        const buttonObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    homeBtn.classList.remove('show');
                } else {
                    homeBtn.classList.add('show');
                }
            });
        }, {
            threshold: 0.5
        });

        buttonObserver.observe(homePage);
    }, 2000);

});
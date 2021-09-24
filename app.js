// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    links.classList.toggle("show-links");
});



// ********** fixed navbar ************
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('nav')
        // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



// ********** ACCORDION ************
const details = Array.from(document.querySelectorAll("details"));

details.forEach((detail) => {
    detail.addEventListener("click", (e) => {
        const active = details.find((d) => d.open);
        if (!e.currentTarget.open && active) {
            active.open = false;
        }
    });
});


// ********** TAB SECTION ************
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




// ********** GSAP  ************
let timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

timeline.to('.divider', { height: '8rem', duration: 1 });
timeline.to('.intro-logo', { left: '25%', duration: 1 }, '-=.6');
timeline.to('.intro-heading', { opacity: '1', left: '55%', duration: 1 }, '-=1');
timeline.to('.intro-logo', { left: '51%', duration: 1, delay: 1 });
timeline.to('.intro-heading', { opacity: '0', duration: 1 }, '-=1');
timeline.to('.divider', { height: '0', duration: 0.5 });
timeline.to('.loading-screen', { opacity: '0', duration: 0.5, delay: 0.25 });
timeline.to('.loading-screen', { display: 'none' });
timeline.to('body', { overflow: 'visible' });
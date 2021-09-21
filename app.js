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

// const navbar = document.getElementById("nav");

// window.addEventListener("scroll", function() {
//     const scrollHeight = window.pageYOffset;
//     const navHeight = navbar.getBoundingClientRect().height;
//     if (scrollHeight > navHeight) {
//         navbar.classList.add("fixed-nav");
//     } else {
//         navbar.classList.remove("fixed-nav");
//     }

// });



// ********** ACCORDIONr ************
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
const nav = document.getElementsByTagName("nav")[0];
const more = document.getElementById("explore");
const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const skills = document.getElementById("skills-btn");
const contact = document.getElementById("contact-btn");



let url = window.location.href;
url = url.slice(url.lastIndexOf("/")+1);
more.addEventListener("click", () => {
    document.getElementsByClassName("about")[0].scrollIntoView(true);
    // window.location.href = url + "#about";
});

home.addEventListener("click", () => {
    
    window.scrollTo(0, 0);
    // window.location.href = url + "#home";
    
});

url = url.slice(url.lastIndexOf("/")+1);
about.addEventListener("click", () => {
    
    document.getElementsByClassName("about")[0].scrollIntoView(true);
    // window.location.href = url + "#about";
});

url = url.slice(url.lastIndexOf("/")+1);
skills.addEventListener("click", () => {
    document.getElementsByClassName("skills")[0].scrollIntoView(true);
    // window.location.href = url + "#skills";
});

url = url.slice(url.lastIndexOf("/")+1);
contact.addEventListener("click", () => {
    document.getElementsByClassName("contact_me")[0].scrollIntoView(true);
    // window.location.href = url + "#contact";
});



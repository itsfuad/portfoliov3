const nav = document.getElementsByTagName("nav")[0];
const more = document.getElementById("explore");
const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const services = document.getElementById("service-btn");
const contact = document.getElementById("contact-btn");
const blogs = document.getElementById("blogs-btn");
const instaprofile = document.getElementById('instaprofile');


let url = window.location.href;
url = url.slice(url.lastIndexOf("/")+1);
more.addEventListener("click", () => {
    document.getElementsByClassName("about")[0].scrollIntoView(true);
    //window.location.href = url + "#about";
});

home.addEventListener("click", () => {
    
    window.scrollTo(0, 0);
    //window.location.href = url + "#home";
    
});

url = url.slice(url.lastIndexOf("/")+1);
about.addEventListener("click", () => {
    
    document.getElementsByClassName("about")[0].scrollIntoView(true);
    //window.location.href = url + "#about";
});

url = url.slice(url.lastIndexOf("/")+1);
services.addEventListener("click", () => {
    document.getElementsByClassName("services")[0].scrollIntoView(true);
    //window.location.href = url + "#services";
});

url = url.slice(url.lastIndexOf("/")+1);
contact.addEventListener("click", () => {
    document.getElementsByClassName("contact_me")[0].scrollIntoView(true);
    //window.location.href = url + "#contact";
});

blogs.addEventListener("click", () => {
   window.location.href = url + "/pins";
});

document.querySelector(".dropmenu").addEventListener("click", () => {
    //console.log("😄");
    var elem = document.querySelector(".dropmenu");
    if( elem.innerHTML == "Show Images" ){
        elem.innerHTML = "Hide Images";
        document.querySelector(".row").style.display = "flex";
        //console.log("🥰");
    }
    else{
        elem.innerHTML = "Show Images";
        document.querySelector(".row").style.display = "none"
        //console.log("😐");
    }
});

window.addEventListener("DOMContentLoaded", ()=>{
    ScrollOut({
        targets: "#home, .about div, #about-img, .card, .subcontainer-2 img"
    });
});
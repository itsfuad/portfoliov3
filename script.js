


const nav = document.getElementsByTagName("nav")[0];
const more = document.getElementById("explore");
const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const skills = document.getElementById("skills-btn");
const contact = document.getElementById("contact-btn");



let url = window.location.href;
url = url.slice(url.lastIndexOf("/")+1);
more.onclick = () => {
    document.getElementsByClassName("about")[0].scrollIntoView(true);
   // window.location.href = url + "#about";
}

home.onclick = () => {
    
    window.scrollTo(0, 0);
   // window.location.href = url + "#home";

}

url = url.slice(url.lastIndexOf("/")+1);
about.onclick = () => {

    document.getElementsByClassName("about")[0].scrollIntoView(true);
   // window.location.href = url + "#about";
}

url = url.slice(url.lastIndexOf("/")+1);
skills.onclick = () => {
    document.getElementsByClassName("skills")[0].scrollIntoView(true);
   // window.location.href = url + "#skills";
}

url = url.slice(url.lastIndexOf("/")+1);
contact.onclick = () => {
    document.getElementsByClassName("contact_me")[0].scrollIntoView(true);
   // window.location.href = url + "#contact";
}


function load_home(){

  document.getElementsByTagName("header")[0].classList.add("loaded");
}

function load(){
    document.getElementById("load").classList.toggle("done");
    load_home();
}

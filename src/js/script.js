const nav = document.getElementsByTagName("nav")[0];
const more = document.getElementById("explore");
const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const services = document.getElementById("service-btn");
const contact = document.getElementById("contact-btn");
const projects = document.getElementById("projects-btn");

const media = window.matchMedia("(orientation: landscape) and (min-device-aspect-ratio: 1/1)");


let url = window.location.href;
url = url.slice(url.lastIndexOf("/")+1);
more.addEventListener("click", async () => {
    document.getElementsByClassName("about")[0].scrollIntoView(true);
    //window.location.href = url + "#about";
});

home.addEventListener("click", async () => {
    
    window.scrollTo(0, 0);
    //window.location.href = url + "#home";
});

url = url.slice(url.lastIndexOf("/")+1);
about.addEventListener("click", async () => {
    
    document.getElementsByClassName("about")[0].scrollIntoView(true);
    //window.location.href = url + "#about";
});

url = url.slice(url.lastIndexOf("/")+1);
services.addEventListener("click", async () => {
    document.getElementsByClassName("services")[0].scrollIntoView(true);
    //window.location.href = url + "#services";
});

url = url.slice(url.lastIndexOf("/")+1);
contact.addEventListener("click", async () => {
    document.getElementsByClassName("contact_me")[0].scrollIntoView(true);
    //window.location.href = url + "#contact";
});

projects.addEventListener("click", async () => {
    document.getElementsByClassName("works")[0].scrollIntoView(true);
});


let nm, email, message;

const get_ready = () => {
    nm = document.getElementById("myname").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Hey Baby! There is a new message for you.\n\nName: "+nm+"\nEmail: "+email+"\nMessage: "+message;
    return message;
}

const sender = async (message) => {
    
    var telegram_bot_id = "1947500257:AAELEwND435QBq1pEsDKNtAmcecMl5rhDtM";
    var chat_id = 1467252650;
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
        },
        "data": JSON.stringify({
        "chat_id": chat_id,
        "text": message,
        })
    }
    $.ajax(settings).done();
}

const json = (url) => {
    return fetch(url).then(res => res.json());
}

const agent = async () => {
    data = "Hey baby! Your website was visited by: " + navigator.userAgent;
    //console.log(data);
    if (localStorage.getItem("agent_f") !== navigator.userAgent){
        localStorage.setItem("agent_f", navigator.userAgent);
        //console.log("new visitor");
        await sender(data);
    }
    /*
    else{
        console.log("already visited!");
    }
    */
}

class sound{
    constructor(src) {
    try{
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
          this.sound.play();
        }
        this.stop = function(){
            this.sound.pause();
        }
    }catch(err){
        console.log(err);
    }
    }
}

const mySound = new sound("src/msg.wav");

const send = () => {
    mySound.play();
    console.log("preparing message");
    document.getElementById("popupwrap").classList.add("active");
    document.getElementById("popup").classList.add("active");
    sender(get_ready());
    console.log("message sent");
    document.getElementById("myname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
}
const popupclose = async () => {
    document.getElementById("popupwrap").classList.remove("active");
    document.getElementById("popup").classList.remove("active");
}
const cross = document.getElementById('cross');
const navbar = document.getElementById('navbar');
window.addEventListener("DOMContentLoaded", async ()=>{
    document.getElementById("load").classList.toggle("done");
    document.getElementsByTagName("header")[0].classList.add("loaded");
    caller();
    agent();
    /*
    const images = document.querySelectorAll(".lazy");
    images.forEach((image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.removeAttribute("data-src");
    });
    */
    ScrollOut({
        targets: "#home, .about div, #about-img, .card, .subcontainer-1 ul li"
    });
    jssor_1_slider_init();
});

cross.addEventListener("click", async ()=>{
    navbar.classList.toggle("active");
    cross.classList.toggle("rotate");
    cross.innerText = navbar.classList.contains("active") ? '×' : '≡';
});

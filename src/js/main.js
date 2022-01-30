const nav = document.getElementsByTagName("nav")[0],
    more = document.getElementById("explore"),
    home = document.getElementById("home-btn"),
    about = document.getElementById("about-btn"),
    services = document.getElementById("service-btn"),
    contact = document.getElementById("contact-btn"),
    projects = document.getElementById("projects-btn"),
    media = window.matchMedia("(orientation: landscape) and (min-device-aspect-ratio: 1/1)");
let url = window.location.href, nm, email, message;


url = url.slice(url.lastIndexOf("/") + 1);
more.addEventListener("click", async () => {
    document.getElementsByClassName("about")[0].scrollIntoView(!0);
    navbar.classList.remove("active");
    cross.classList.remove("active");
});

home.addEventListener("click", async () => {
    window.scrollTo(0, 0);
    navbar.classList.remove("active");
    cross.classList.remove("active");
});

url = url.slice(url.lastIndexOf("/") + 1);
about.addEventListener("click", async () => {
    document.getElementsByClassName("about")[0].scrollIntoView(!0);
    navbar.classList.remove("active");
    cross.classList.remove("active");
});

url = url.slice(url.lastIndexOf("/") + 1), services.addEventListener("click", async () => {
    document.getElementsByClassName("services")[0].scrollIntoView(!0);
    navbar.classList.remove("active");
    cross.classList.remove("active");
});

url = url.slice(url.lastIndexOf("/") + 1);
contact.addEventListener("click", async () => {
    document.getElementsByClassName("contact_me")[0].scrollIntoView(!0);
    navbar.classList.remove("active");
    cross.classList.remove("active");
});

projects.addEventListener("click", async () => {
    document.getElementsByClassName("works")[0].scrollIntoView(!0);
    navbar.classList.remove("active");
    cross.classList.remove("active");
});


const get_ready = () => {
    nm = document.getElementById("myname").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = `Hey Baby! New Message from ${nm}\nEmail: ${email}\nMessage: ${message}`;
    return message;
}

const sender = (message) => {
    
    const telegram_bot_id = "1947500257:AAELEwND435QBq1pEsDKNtAmcecMl5rhDtM";
    const chat_id = 1467252650;

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
        "method": "POST",
        "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
        },
        "data": JSON.stringify({
        "chat_id": chat_id,
        "parse_mode": "HTML",
        "text": message
        })
    }
    $.ajax(settings).done(); 
}

const agent = async () => {
    data = `Hey baby! Your website was visited by: ${window.navigator.userAgent}`;
    //console.log(data);
    if (localStorage.getItem("agent_f") != window.navigator.userAgent){
        localStorage.setItem("agent_f", window.navigator.userAgent);
        //console.log("new visitor");
        sender(data);
    }
    /*
    else{
        console.log("already visited!");
    }
    */
}



class sound {
    constructor(src) {
        try {
            this.sound = document.createElement("audio");
            this.sound.src = src;
            this.sound.setAttribute("preload", "auto");
            this.sound.setAttribute("controls", "none");
            this.sound.style.display = "none";
            document.body.appendChild(this.sound);
            this.play = function() {
                this.sound.play();
            }
            this.stop = function() {
                this.sound.pause();
            }
        } catch (err) {
            console.log(err);
        }
    }
}
const mySound = new sound("src/audio/msg.wav");
send = () => {
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
popupclose = async () => {
    document.getElementById("popupwrap").classList.remove("active");
    document.getElementById("popup").classList.remove("active");
}
crossWrap = document.getElementById("cross-wrapper");
cross = document.getElementById("cross");
navbar = document.getElementById("navbar");
window.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("load").classList.toggle("done");
    document.getElementsByTagName("header")[0].classList.add("loaded");
    caller();
    agent();
    media.matches && (window.onscroll = () => {
        scrollFunction();
    });
    scrollFunction()
});
ScrollOut({
        targets: "#home, .about div, #about-img, .card"
});
jssor_1_slider_init();
crossWrap.addEventListener("click", async () => {
    navbar.classList.toggle("active");
    cross.classList.toggle("active");
});
window.onorientationchange = () => {
    window.onscroll = () => {
        scrollFunction();
    }
};
window.onresize = () => {
    window.onscroll = () => {
        scrollFunction();
    }
}
const scrollFunction = () => {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? document.getElementsByClassName("nv")[0].classList.add("scrolled") : document.getElementsByClassName("nv")[0].classList.remove("scrolled");
}
window.addEventListener("scroll", () => {
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? document.getElementById("btt").classList.add("active") : document.getElementById("btt").classList.remove("active");
});

document.getElementById("btt").onclick = () => {
    window.scrollTo(0,0);
}

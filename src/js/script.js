const nav = document.getElementsByTagName("nav")[0],
    more = document.getElementById("explore"),
    home = document.getElementById("home-btn"),
    about = document.getElementById("about-btn"),
    services = document.getElementById("service-btn"),
    contact = document.getElementById("contact-btn"),
    projects = document.getElementById("projects-btn"),
    media = window.matchMedia("(orientation: landscape) and (min-device-aspect-ratio: 1/1)");
let url = window.location.href,
    nm, email, message;
url = url.slice(url.lastIndexOf("/") + 1), more.addEventListener("click", async () => {
    document.getElementsByClassName("about")[0].scrollIntoView(!0)
}), home.addEventListener("click", async () => {
    window.scrollTo(0, 0)
}), url = url.slice(url.lastIndexOf("/") + 1), about.addEventListener("click", async () => {
    document.getElementsByClassName("about")[0].scrollIntoView(!0)
}), url = url.slice(url.lastIndexOf("/") + 1), services.addEventListener("click", async () => {
    document.getElementsByClassName("services")[0].scrollIntoView(!0)
}), url = url.slice(url.lastIndexOf("/") + 1), contact.addEventListener("click", async () => {
    document.getElementsByClassName("contact_me")[0].scrollIntoView(!0)
}), projects.addEventListener("click", async () => {
    document.getElementsByClassName("works")[0].scrollIntoView(!0)
});
const get_ready = () => (nm = document.getElementById("myname").value, email = document.getElementById("email").value, message = document.getElementById("message").value, message = "Hey Baby! There is a new message for you.\n\nName: " + nm + "\nEmail: " + email + "\nMessage: " + message, message),
    sender = async message => {
        var telegram_bot_id, chat_id = 1467252650,
            settings = {
                async: !0,
                crossDomain: !0,
                url: "https://api.telegram.org/bot" + "1947500257:AAELEwND435QBq1pEsDKNtAmcecMl5rhDtM" + "/sendMessage",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache"
                },
                data: JSON.stringify({
                    chat_id: chat_id,
                    text: message
                })
            };
        $.ajax(settings).done()
    }, json = url => fetch(url).then(res => res.json()), agent = async () => {
        data = "Hey baby! Your website was visited by: " + navigator.userAgent, localStorage.getItem("agent_f") !== navigator.userAgent && (localStorage.setItem("agent_f", navigator.userAgent), await sender(data))
    };
class sound {
    constructor(src) {
        try {
            this.sound = document.createElement("audio"), this.sound.src = src, this.sound.setAttribute("preload", "auto"), this.sound.setAttribute("controls", "none"), this.sound.style.display = "none", document.body.appendChild(this.sound), this.play = function() {
                this.sound.play()
            }, this.stop = function() {
                this.sound.pause()
            }
        } catch (err) {
            console.log(err)
        }
    }
}
const mySound = new sound("src/msg.wav"),
    send = () => (mySound.play(), console.log("preparing message"), document.getElementById("popupwrap").classList.add("active"), document.getElementById("popup").classList.add("active"), sender(get_ready()), console.log("message sent"), document.getElementById("myname").value = "", document.getElementById("email").value = "", document.getElementById("message").value = "", !1),
    popupclose = async () => {
        document.getElementById("popupwrap").classList.remove("active"), document.getElementById("popup").classList.remove("active")
    }, cross = document.getElementById("cross"), navbar = document.getElementById("navbar");
window.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("load").classList.toggle("done"), document.getElementsByTagName("header")[0].classList.add("loaded"), caller(), agent(), media.matches && (window.onscroll = () => {
        scrollFunction()
    }, scrollFunction()), ScrollOut({
        targets: "#home, .about div, #about-img, .card, .subcontainer-1 ul li"
    }), jssor_1_slider_init()
}), cross.addEventListener("click", async () => {
    navbar.classList.toggle("active");
    cross.classList.toggle("active");
}), window.onorientationchange = () => {
    window.onscroll = () => {
        scrollFunction()
    }
}, window.onresize = () => {
    window.onscroll = () => {
        scrollFunction()
    }
}
const scrollFunction = () => {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? document.getElementsByClassName("nv")[0].classList.add("scrolled") : document.getElementsByClassName("nv")[0].classList.remove("scrolled")
}
window.addEventListener("scroll", () => {
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? document.getElementById("btt").classList.add("active") : document.getElementById("btt").classList.remove("active")
});
document.getElementById("btt").addEventListener("click", () => {
    window.scrollTo(0, 0);
});
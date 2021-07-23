const nav = document.getElementsByTagName("nav")[0];
const more = document.getElementById("explore");
const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const services = document.getElementById("service-btn");
const contact = document.getElementById("contact-btn");
const blogs = document.getElementById("blogs-btn");

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

document.addEventListener("scroll", ()=>{
    console.log("Scrolled");
    if (document.querySelector("#home").attributes[2].value == "in"){
        console.log("Home in");
        home.style = `
        transition: 600ms;
        color: var(--blue);
        `;
        about.style = `
        transition: 600ms;
        color: var(--black);
        `;
        services.style = `
        transition: 600ms;
        color: var(--black);
        `;
        contact.style = `
        transition: 600ms;
        color: var(--black);
        `;
    }
    else if (document.querySelector("#home").attributes[2].value == "out"){
        home.style = `
        transition: 600ms;
        color: var(--black);
        `;
    }
    if (document.querySelector("#about-img").attributes[4].value == "in"){
        about.style = `
        transition: 600ms;
        color: var(--blue);
        `;
        home.style = `
        transition: 600ms;
        color: var(--black);
        `;
        services.style = `
        transition: 600ms;
        color: var(--black);
        `;
        contact.style = `
        transition: 600ms;
        color: var(--black);
        `;
    }
    else if (document.querySelector("#about-img").attributes[4].value == "out"){
        about.style = `
        transition: 600ms;
        color: var(--black);
        `;
        console.log("Out");
    }
    if (document.querySelector("#services").attributes[2].value == "in"){
        services.style = `
        transition: 600ms;
        color: var(--blue);
        `;
        home.style = `
        transition: 600ms;
        color: var(--black);
        `;
        about.style = `
        transition: 600ms;
        color: var(--black);
        `;
        contact.style = `
        transition: 600ms;
        color: var(--black);
        `;
    }
    else if (document.querySelector("#services").attributes[2].value == "out"){
        services.style = `
        transition: 600ms;
        color: var(--black);
        `;
    }
    if (document.querySelector("#contact").attributes[2].value == "in"){
        contact.style = `
        transition: 600ms;
        color: var(--blue);
        `;
        home.style = `
        transition: 600ms;
        color: var(--black);
        `;
        about.style = `
        transition: 600ms;
        color: var(--black);
        `;
        services.style = `
        transition: 600ms;
        color: var(--black);
        `;
    }
    else if (document.querySelector("#contact").attributes[2].value == "out"){
        contact.style = `
        transition: 600ms;
        color: var(--black);
        `;
    }
});


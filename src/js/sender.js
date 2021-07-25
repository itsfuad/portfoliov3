let nm, email, message;

const get_ready = () => {
    nm = document.getElementById("myname").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Hey Baby! There is a new message for you.\n\nName: "+nm+"\nEmail: "+email+"\nMessage: "+message;
    return message;
}

const sender = (message) => {
    
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
        "text": message
        })
    }
    $.ajax(settings).done(); 
}

function json(url) {
    return fetch(url).then(res => res.json());
  }

var ip, city, country_code;
let apiKey = '86c95de4ff7cc49dfcd0cbc49b9f78535c653bbb992310edd9243d48';
  
const agent = async () => {
    await json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
      ip = data.ip;
      city = data.city;
      country_code = data.country_code;
      // so many more properties
    });
    data = "Hey baby! Your website was visited by: " + window.navigator.userAgent + `\nIP: ${ip}\nCity: ${city}\nContry Code: ${country_code}`;
    console.log(data);
    sender(data);
}

function sound(src) {
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


var mySound =  new sound("src/msg.wav");

const send = () => {
    mySound.play();
    document.getElementById("popupwrap").classList.add("active");
    document.getElementById("popup").classList.add("active");
    sender(get_ready());
    document.getElementById("myname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
}
const popupclose = () => {
    document.getElementById("popupwrap").classList.remove("active");
    document.getElementById("popup").classList.remove("active");
}
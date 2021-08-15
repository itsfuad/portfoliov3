const nav = document.getElementsByTagName("nav")[0];
const more = document.getElementById("explore");
const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const services = document.getElementById("service-btn");
const contact = document.getElementById("contact-btn");
const projects = document.getElementById("projects-btn");
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

projects.addEventListener("click", () => {
    document.getElementsByClassName("works")[0].scrollIntoView(true);
});




window.jssor_1_slider_init = function() {
    
    var jssor_1_SlideshowTransitions = [
        {$Duration:800,x:0.25,$Zoom:1.5,$Easing:{$Left:$Jease$.$InWave,$Zoom:$Jease$.$InCubic},$Opacity:2,$ZIndex:-10,$Brother:{$Duration:800,x:-0.25,$Zoom:1.5,$Easing:{$Left:$Jease$.$InWave,$Zoom:$Jease$.$InCubic},$Opacity:2,$ZIndex:-10}},
      {$Duration:1200,x:0.5,$Cols:2,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InOutCubic},$Opacity:2,$Brother:{$Duration:1200,$Opacity:2}},
      {$Duration:600,x:0.3,$During:{$Left:[0.6,0.4]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:600,x:-0.3,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}},
      {$Duration:800,x:0.25,y:0.5,$Rotate:-0.1,$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Brother:{$Duration:800,x:-0.1,y:-0.7,$Rotate:0.1,$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2}},
      {$Duration:1000,x:1,$Rows:2,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:1000,x:-1,$Rows:2,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}},
      {$Duration:1000,y:-1,$Cols:2,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:1000,y:1,$Cols:2,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}},
      {$Duration:800,y:1,$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:800,y:-1,$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}},
      {$Duration:1000,x:-0.1,y:-0.7,$Rotate:0.1,$During:{$Left:[0.6,0.4],$Top:[0.6,0.4],$Rotate:[0.6,0.4]},$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Brother:{$Duration:1000,x:0.2,y:0.5,$Rotate:-0.1,$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2}},
      {$Duration:800,x:-0.2,$Delay:40,$Cols:12,$During:{$Left:[0.4,0.6]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5},$Brother:{$Duration:800,x:0.2,$Delay:40,$Cols:12,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:1028,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Round:{$Top:0.5},$Shift:-200}},
      {$Duration:700,$Opacity:2,$Brother:{$Duration:700,$Opacity:2}},
      {$Duration:800,x:1,$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:800,x:-1,$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}}
    ];
    
    var jssor_1_options = {
        $AutoPlay: 1,
      $FillMode: 5,
      $SlideshowOptions: {
          $Class: $JssorSlideshowRunner$,
          $Transitions: jssor_1_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $SpacingX: 16,
        $SpacingY: 16
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 600;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};




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

const agent = async () => {
    data = "Hey baby! Your website was visited by: " + window.navigator.userAgent;
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

  window.addEventListener("DOMContentLoaded", ()=>{
    
    document.getElementById("load").classList.toggle("done");
    document.getElementsByTagName("header")[0].classList.add("loaded");
    caller();
    agent();
    const images = document.querySelectorAll(".lazy");
    images.forEach((image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.removeAttribute("data-src");
    });
    ScrollOut({
        targets: "#home, .about div, #about-img, .card, .subcontainer-1 ul li"
    });
    jssor_1_slider_init();
});
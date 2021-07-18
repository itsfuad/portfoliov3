function sender(){
    
    let name = document.getElementById("myname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    message = "Hey Baby! There is a new message for you.\n\nName: "+name+"\nEmail: "+email+"\nMessage: "+message;

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
    $.ajax(settings).done(function (response) {
        console.log(response);
    }); 
}
function send(){
    document.getElementById("popupwrap").classList.add("active");
    document.getElementById("popup").classList.add("active");
    sender();
    document.getElementById("myname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
}
function popupclose(){
    document.getElementById("popupwrap").classList.remove("active");
    document.getElementById("popup").classList.remove("active");
}
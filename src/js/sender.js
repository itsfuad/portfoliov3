function sender(){
    let name = document.forms["contact"]["name"].value;
    let email = document.forms["contact"]["email"].value;
    let message = document.forms["contact"]["message"].value;
    
    message = "Hey Baby! There is a new message for you.\nName: "+name+"\nEmail: "+email+"\nMessage: "+message;

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
    alert("Thank You!");
}
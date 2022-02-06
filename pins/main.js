function load(){
    document.getElementById("load").classList.toggle("done");
}


var loaded = false;
var firebaseConfig = {
    apiKey: "AIzaSyAGjKtgPcMhNH9f3ljdknP-fi6LfrQy5VM",
    authDomain: "pin-posts.firebaseapp.com",
    projectId: "pin-posts",
    storageBucket: "pin-posts.appspot.com",
    messagingSenderId: "1083663238758",
    appId: "1:1083663238758:web:e04b9a8d9f7608b280cfa7",
    measurementId: "G-WL85B9YMGE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var data;

firebase.database().ref("All Pin/Contents").on('child_added', (snapshot, prevChildKey) => {
    if (!loaded) {
        loaded = true;
        document.getElementById("contents").innerHTML = "";
    }
    const newPost = snapshot.val();

    console.log('Previous Post ID: ' + prevChildKey);
    data = newPost.pin;
    data = "<div class='blog'>" + data + "</div>";
    document.getElementById("contents").innerHTML = data + document.getElementById("contents").innerHTML;
    hljs.highlightAll();
});


var channelID = "UC0SO-iZgpZRVS38qt6xgh7Q";
    var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
    $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
       var link = data.items[0].link;
       var id = link.substr(link.indexOf("=")+1);
    $("#youtube_video").attr("src","https://youtube.com/embed/"+ id + "?controls=1&showinfo=0&rel=0");
		var link = data.items[1].link;
       	var id = link.substr(link.indexOf("=")+1);
    $("#youtube_video2").attr("src","https://youtube.com/embed/"+ id + "?controls=1&showinfo=0&rel=0");
		var link = data.items[2].link;
     	var id = link.substr(link.indexOf("=")+1);
    $("#youtube_video3").attr("src","https://youtube.com/embed/"+ id + "?controls=1&showinfo=0&rel=0");
    var link = data.items[3].link;
    var id = link.substr(link.indexOf("=")+1);
    $("#youtube_video4").attr("src","https://youtube.com/embed/"+ id + "?controls=1&showinfo=0&rel=0");

    });

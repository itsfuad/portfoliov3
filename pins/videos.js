
function load_home(){
  document.getElementsByTagName("header")[0].classList.add("loaded");
}

function load(){
    document.getElementById("load").classList.toggle("done");
    load_home();
}

var channelID = "UCsBjURrPoezykLs9EqgamOA";
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
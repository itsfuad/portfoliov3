
function gettext(){
    text = document.getElementById("contents").value;
}
function gethtml(){
    gettext();
    html = marked(text);
    document.getElementById("contents").value = html;
}

function gettext(){
    text = document.getElementById("contents").value;
}
document.getElementById("convert-btn").addEventListener("click", ()=>{
    gettext();
    if (text == "" || text == " "){
        alert("No Text!");
        return;
    }
    html = marked(text);
    document.getElementById("contents").value = html;
    document.getElementById("convert-btn").value = "Converted!"
    document.getElementById("convert-btn").style = `
        background:#34eb37;
        color: black;
        box-shadow: 0 0 15px #34eb37;
        cursor: not-allowed;
    `;
});
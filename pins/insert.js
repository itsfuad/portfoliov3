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


firebase.database().ref("All Pin/Contents").on('child_changed', (snapshot, prevChildKey) => {
    loaded = true;
    if (loaded) {
        document.getElementById("contents").innerHTML = "";
    }
    const newPost = snapshot.val();
    console.log('Id: ' + newPost.id);
    console.log('Content: ' + newPost.contents);
    console.log('Previous Post ID: ' + prevChildKey);
    data = newPost.contents;
    data = "<div class='blog'>" + data + "</div>";
    document.getElementById("contents").innerHTML += data;
    hljs.highlightAll();
});
  

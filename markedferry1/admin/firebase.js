// Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

    //---------data------------
    var pin_id, contents, data;

    function ready(){
        pin_id = document.getElementById("pin_id").value;
        contents = document.getElementById("contents").value;
    }

    function set(){
        firebase.database().ref("All Pin/Contents/Post-"+pin_id).update({
            id: pin_id,
            contents: contents
        });
    }

    document.getElementById("upload").addEventListener("click", ()=> {
        ready();
        if (pin_id == "" || pin_id == " "){
            alert("Provide an id!");
            return;
        }
        if (contents == "" || contents == " "){
            alert("Nothing to upload!");
            return;
        }
        set();
        console.log("Up");
        document.getElementById("pin_id").value = "";
        document.getElementById("contents").value = "";
    });

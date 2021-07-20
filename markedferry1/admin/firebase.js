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
    var pin_id = 0, contents, data;

    firebase.database().ref("All Pin/Contents").on('child_added', (snapshot, prevChildKey) => {
        pin_id = parseInt(snapshot.val().id) + 1;
        console.log(pin_id);
    });

    function ready(){
        contents = document.getElementById("contents").value;
    }

    function set(){
        firebase.database().ref("All Pin/Contents/"+ parseInt(pin_id)).update({
            pin: contents,
            id: pin_id
        });
    }

    function clicked(){
        ready();
        if (contents == "" || contents == " "){
            alert("Nothing to upload!");
            return;
        }
        console.log(pin_id);
        set();
        console.log("Up");
        document.getElementById("contents").value = "";
        document.getElementById("convert-btn").value = "Convert to HTML!"
        document.getElementById("convert-btn").style = `
            background:background: rgba(255, 255, 255, 0.07);
            color: white;
            box-shadow: none;
            cursor: allowed;
        `;
    }

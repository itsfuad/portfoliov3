const gig = document.getElementById("gigs");

const gigs = [ " software developer.", " web designer.", " visual artist."];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const remove = async () => {
    //alert("r");
    while (gig.innerHTML.length != 0){
        gig.innerHTML = gig.innerHTML.substring(0, gig.innerHTML.length - 1);
        await sleep (40);
    }
}
const gigwriter = async () => {
    //alert(gig);
    for (let i = 0; i <= gigs.length-1; i++){
        for( let j = 0; j <= gigs[i].length-1; j++){
            gig.innerHTML += gigs[i][j];
            await sleep(80);
            if ( j == gigs[i].length-1 ){
               // alert("dome");
                await sleep(2000);
                await remove();
            }
        }
    }
}

const caller = async () =>{
    while (true){
        //alert("stated!");
        await gigwriter();
        //alert("Ended!");
    }
}
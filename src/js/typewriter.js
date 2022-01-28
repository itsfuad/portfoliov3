const gig=document.getElementById("gigs");
const gigs=[" - Software developer."," - Web designer."," - Visual artist."];
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
const remove=async()=>{
    for(let i = gig.textContent.length;i>0;i--){
        gig.textContent=gig.textContent.substring(0,gig.textContent.length-1);
        await sleep(40);
    }
};
const gigwriter=async()=>{
    for(let i=0;i<=gigs.length-1;i++){
        for(let j=0;j<=gigs[i].length-1;j++){
            gig.textContent+=gigs[i][j];
            await sleep(80);
            if (j == gigs[i].length-1){
                await sleep(2000);
                await remove();
            }
        }
    }
};
const caller=async()=>{
    await gigwriter();
    requestAnimationFrame(caller);
};
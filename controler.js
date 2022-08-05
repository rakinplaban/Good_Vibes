twits = ["This worldy life is very short.","This worldy life is nothing but an illusion",
"This worldy life is temporary, the life after death is permanent."]
document.addEventListener("DOMContentLoaded",()=>{
    console.log("Dom fully loaded!");
    let counter = 0
    for(let i =0 ;i<twits.length;i++){
        document.querySelector("#button_h5").addEventListener("click",()=>{
            document.querySelector("#pipper").innerHTML = twits[i];
        });
        counter++;
        console.log(counter," Button works!")
    }
    // document.querySelector("#button_h5").addEventListener("click",ramen);
})



// function ramen(){
//     console.log(twits.length);
//     // let counter = 0;
//     // for(let i=0;i<twits.length;i++){
//     //     console.log("Button Works!");
//     //     document.querySelector("#pipper").innerHTML = twits[i];
//     //     counter++;
//     // }
//     document.querySelector("#pipper").innerHTML = twits[i];
// }
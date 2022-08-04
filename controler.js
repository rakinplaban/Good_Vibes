document.addEventListener("DOMContentLoaded",()=>{
    console.log("Dom fully loaded!");

    document.querySelector("#button_h5").addEventListener("click",ramen);
})


function ramen(){
    console.log("Button Works!");
    document.querySelector("#pipper").innerHTML = "Hi, pappy!";
}
document.addEventListener("DOMContentLoaded",()=>{
    console.log("Dom fully loaded!");

    document.querySelector("#button_h5").addEventListener("onClick",ramen);
})


function ramen(){
    console.log("Button Works!");
    document.querySelector("#button_h5").innerHTML = "Hi, pappy!";
}
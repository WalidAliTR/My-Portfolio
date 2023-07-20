
//go to contect section after 2min
// let cont = document.getElementById("con");
// function goto(){
//     cont.click();
// }
// setInterval(goto,(3000*60));


//Html Title Change 
let alertShow = false;

setInterval(function(){
    document.title =
    alertShow ? "Welcome To My Portofolio" : "I am Walid Ali";
    alertShow = !alertShow;
},3000)


//Show My Cv In a new Page

let MyCv = document.getElementById("cv")
MyCv.addEventListener('click',function(){
     window.open("MyCv.pdf");
})
//splash screen
const spalsh = document.querySelector(".splash");
document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        document.body.classList.remove("overflow-Set");
        spalsh.classList.add("display-none")
        
       
    },1500)})




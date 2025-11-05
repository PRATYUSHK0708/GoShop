const list=document.querySelector(".navlist");
const hamburger=document.querySelector(".fa-bars")

hamburger.addEventListener("click",(e)=>{
    e.preventDefault();
    hamburger.classList.toggle("fa-bars")
    hamburger.classList.toggle("fa-x")
    list.classList.toggle("navlist-active")


})


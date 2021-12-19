const closeNav=document.querySelector(".nav__button_close");
const nav=document.querySelector(".nav")
const menuOpen=document.querySelector(".menuOpen")
menuOpen.addEventListener("click",()=>{
    nav.classList.toggle("nav_active")
})
closeNav.addEventListener("click",()=>{
    nav.classList.remove("nav_active")
})
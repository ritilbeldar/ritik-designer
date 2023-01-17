const right_bar = document.querySelector(".ri-align-right");
const mobail_nav = document.querySelector(".mobail-nav");
const close_bar = document.querySelector(".ri-close-line");
const center = document.querySelector(".center");



right_bar.addEventListener("click",function() {
    mobail_nav.style.transform = "translatex(0)";
})

close_bar.addEventListener("click",function() {
    mobail_nav.style.transform = "translatex(110%)";
})

// right_bar.addEventListener("click",function() {
//     center.style.display = "none";
// })
// close_bar.addEventListener("click",function() {
//     center.style.display = "flex";
// })
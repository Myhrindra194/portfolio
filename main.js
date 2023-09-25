
let circularProgress = document.querySelectorAll(".circular-progress");
let progressValue = document.querySelectorAll(".progress-value");
   
for(let i =0 ; i < progressValue.length; i++){
    progressValue[i].textContent =  `${progressValue[i].dataset.value}%`;
    circularProgress[i].style.background = `conic-gradient(#7d2ae8 ${progressValue[i].dataset.value * 3.6}deg , #ededed 0deg)`;
}
window.addEventListener("load" , () => {
    document.querySelector(".preloader").classList.add("preloader-hide");
})
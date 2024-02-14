var nowTime = new Date().getTime();
var destTime = localStorage.getItem("destTime");
if (!destTime) {
    destTime = new Date(nowTime + 10 * 60 * 1000).getTime();
    localStorage.setItem("destTime", destTime);
}
else {
    destTime = parseInt(destTime);
}
var minutesTens = document.getElementById("minutesTens");
var minutesOnes = document.getElementById("minutesOnes");
var secondsTens = document.getElementById("secondsTens");
var secondsOnes = document.getElementById("secondsOnes");

var intervalId = setInterval(() => {
    nowTime = new Date().getTime();
    var diff = destTime - nowTime;
    var minutes = Math.floor(diff / (60 * 1000));
    var seconds = Math.floor((diff % (60 * 1000)) / 1000);

    var actminuteTens = Math.floor(minutes / 10);
    var actminuteOnes = Math.floor(minutes % 10);
    var actsecondTens = Math.floor(seconds / 10);
    var actsecondOnes = Math.floor(seconds % 10);
    minutesTens.innerText = actminuteTens
    minutesOnes.innerText = actminuteOnes
    secondsTens.innerText = actsecondTens
    secondsOnes.innerText = actsecondOnes

    // if (actminuteTens == 0 && actminuteOnes == 0 && actsecondTens && actsecondOnes) {
    //     clearInterval(intervalId);
    // }
    if (minutes <= 0 && seconds <= 0) {
        minutesTens.innerText = 0
        minutesOnes.innerText = 0
        secondsTens.innerText = 0
        secondsOnes.innerText = 0
        clearInterval(intervalId);
    }
}, 1000)

var formModal = document.getElementById("formModal");
var formBox = document.getElementById("formBox");
var closeBtn = document.getElementById("closeBtn");

var isModalOpen = localStorage.getItem("isModalOpen");
if (isModalOpen == null) {
    setTimeout(() => {
        formBox.classList.toggle("show");
        formModal.classList.toggle("overlay");
        localStorage.setItem("isModalOpen", false)
    }, 15000);
}



closeBtn.addEventListener("click", () => {
    formBox.classList.toggle("show");
    formModal.classList.toggle("overlay");
})

var hamburgerDiv = document.getElementById("hamburgerDiv");
var navbar = document.getElementById("navbar");
var navLogo = document.getElementById("navLogo");
var navLinks = document.getElementById("navLinks");
var hamburgerIcon = document.getElementById("hamburgerIcon");
var navLinksUl = document.getElementById("navLinksUl");
hamburgerDiv.addEventListener("click", () => {
    navbar.classList.toggle("navToggle");
    navLogo.classList.toggle("navLogoToggle");
    navLinks.classList.toggle("navLinksToggle");
    hamburgerDiv.classList.toggle("hamBurgerStyle")
    hamburgerIcon.classList.toggle("mobile-hamLine");
})


const clickLi = () => {
    navbar.classList.toggle("navToggle");
    navLogo.classList.toggle("navLogoToggle");
    navLinks.classList.toggle("navLinksToggle");
    hamburgerDiv.classList.toggle("hamBurgerStyle")
    hamburgerIcon.classList.toggle("mobile-hamLine");
}
var lis = navLinksUl.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', clickLi);
}


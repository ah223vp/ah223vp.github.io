/**
 * Source: Major part is from a jekyll theme called "Clean".
 */

setInterval(function() {
    let seconds = new Date().getSeconds();
    let sdegree = seconds * 6 + 270;
    seconds = ("0" + seconds).slice(-2);
    let secondSel = document.querySelector(".seconds");

    secondSel.style.transform = "rotate(" + sdegree + "deg) translate(160px) rotate(-" + sdegree + "deg)";
    secondSel.innerHTML = seconds;

    let minutes = new Date().getMinutes();
    let mdegree = minutes * 6 + 270;
    let minutesSel = document.querySelector(".minutes");
    minutes = ("0" + minutes).slice(-2);

    minutesSel.style.transform = "rotate(" + mdegree + "deg) translate(181px) rotate(-" + mdegree + "deg)";
    minutesSel.innerHTML =  minutes;

    let hours = new Date().getHours();
    let hoursSel = document.querySelector(".hours");



    hours = ("0" + hours).slice(-2);

    hoursSel.innerHTML = hours;
}, 1000);










<script>

setInterval(function() {
    var seconds = new Date().getSeconds();
    var sdegree = seconds * 6 + 270;
    seconds = ("0" + seconds).slice(-2);
    var secondSel = document.querySelector(".seconds");

    secondSel.style.transform = "rotate(" + sdegree + "deg) translate(160px) rotate(-" + sdegree + "deg)";
    secondSel.innerHTML = seconds;

    var minutes = new Date().getMinutes();
    var mdegree = minutes * 6 + 270;
    var minutesSel = document.querySelector(".minutes");
    minutes = ("0" + minutes).slice(-2);

    minutesSel.style.transform = "rotate(" + mdegree + "deg) translate(181px) rotate(-" + mdegree + "deg)";
    minutesSel.innerHTML =  minutes;

    var hours = new Date().getHours();
    var hoursSel = document.querySelector(".hours");



    hours = ("0" + hours).slice(-2);

    hoursSel.innerHTML = hours;
}, 1000);





</script>

setInterval(setClock, 1000);

function setClock() {
    // Rotate Second Hand

    const nowSec = new Date();
    let seconds = nowSec.getSeconds();

    let secondsDeg = ((seconds / 60) * 360) + 90;
    let secHand = document.querySelector(".second-hand");
    secHand.style.transform = `rotate(${secondsDeg}deg)`;


    // Rotate Minute Hand

    const nowMin = new Date();
    let minutes = nowMin.getMinutes();


    let minutesDeg = ((minutes / 60) * 360) + 90;
    let minHand = document.querySelector(".min-hand");
    minHand.style.transform = `rotate(${minutesDeg}deg)`;


    // Rotate Hour Hand

    const nowHour = new Date();
    let hours = nowHour.getHours();

    let hoursDeg = ((hours / 12) * 360) + 90;
    let hourHand = document.querySelector(".hour-hand");
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

}



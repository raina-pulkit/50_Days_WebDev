var currentState = 1;
const days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thrursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

$(".dark-mode").click(() => {
    $("body").toggleClass("dark");
    $(".dark-mode").toggleClass("dark");
    
    $(".clock").toggleClass("dark");
    $(".needle").toggleClass("dark");
    $(".center-clock").toggleClass("dark");
    $(".time").toggleClass("dark");
    $(".date").toggleClass("dark");
    
    currentState *= -1;

    if(currentState === -1){
        $(".dark-mode").text("Light Mode");
    }
    else{
        $(".dark-mode").text("Dark Mode");
    }
});

function setClockHands(date, month, hours, minutes, seconds, sign, day){
    const time = `${hours}`+":"+`${minutes}`+` ${sign}`;
    
    $(".time").text(time);
    $(".day").text(day);
    $(".month").text(month);
    $(".date").text(date);

    const hrHand = $(".needle.hour");
    const minHand = $(".needle.min");
    const secHand = $(".needle.sec");
    

    // const hrAngle = ;
    // const minAngle = ;
    const secAngle = (seconds/60)*360 + 180;
    const minAngle = (minutes/60)*360 + (seconds)*0.1 +180;
    const hourAngle = (hours/12)*360 + (minutes)*0.5 + (seconds)/120 + 180;

    secHand.css({
        "transform": `translate(-50%, 0) rotate(${secAngle}deg)`
    });

    minHand.css({
        "transform": `translate(-50%, 0) rotate(${minAngle}deg)`
    });

    hrHand.css({
        "transform": `translate(-50%, 0) rotate(${hourAngle}deg)`
    });


}

function getTime(){
    const time = new Date();
    const date = time.getDate();
    const month = months[time.getMonth()];
    var hours = time.getHours();
    var minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const day = days[time.getDay()];
    var sign;

    if(hours === 0){
        hours = 12;
        sign = "am";
    }
    else if(hours > 12){
        hours -= 12;
        sign = "pm";
    }
    else{
        sign = "am";
    }

    if(minutes < 10){
        minutes = `0${minutes}`;
    }

    if(hours<10){
        hours = `0${hours}`;
    }

    setClockHands(date, month, hours, minutes, seconds, sign, day);
    console.log(date, month, hours, minutes, seconds, sign, day);
}

setInterval(getTime, 1000);
var s = [];
var currTime = 0;
const incr = 10;

$(".count").each((ind, elem) => {
    s.push(elem.innerText);
});

$(".count").text("0");

let calculator = (inMin, inMax, outMin, outMax, curr) => Math.floor(((curr-inMin)/(inMax-inMin))*(outMax-outMin) + outMin);

//We could do this but this doesn't always give accurate final value as these setInterval and setTimeout functions are asynchronous
/*let interval = setInterval(() => {
    const twitter = calculator(0, 100, 0, s[0], currTime);
    const youtube = calculator(0, 100, 0, s[1], currTime);
    const insta = calculator(0, 100, 0, s[2], currTime);
    const change = $(".count");
    
    console.log(twitter);
    change[0].innerText = `${twitter}`;
    change[1].innerText = `${youtube}`;
    change[2].innerText = `${insta}`;
    
    currTime++;
}, incr);

setTimeout(() => {
    clearInterval(interval);
}, incr*101);*/

var currTime = 0;

function counter(){
    const twitter = calculator(0, 100, 0, s[0], currTime);
    const youtube = calculator(0, 100, 0, s[1], currTime);
    const insta = calculator(0, 100, 0, s[2], currTime);
    const change = $(".count");
    
    change[0].innerText = `${twitter}`;
    change[1].innerText = `${youtube}`;
    change[2].innerText = `${insta}`;
    
    currTime++;
    if(currTime !== 101)
        setTimeout(counter, 20);
}

counter();
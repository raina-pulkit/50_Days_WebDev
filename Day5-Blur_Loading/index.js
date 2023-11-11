var time = 0;

function updater(){
    $(".percent").text(`${time}%`);
    $(".percent").css({"opacity": `${opac(time, 0, 100, 1, 0)}`});

    // We can bring the blur also down in similar fashion
    $(".image").css({"filter" : `blur(${opac(time, 0, 100, 10, 0)}px)`});
    
    time++;
    if(time>100)
        clearInterval(help);
}

const opac = (curr, inMin, inMax, outMin, outMax) => {
    return ((curr-inMin)*(outMax-outMin)/(inMax-inMin)) + outMin;
};

//Keeps calling the function every interval later till its cleared
var help = setInterval(updater, 30);

if(time === 101)
    $(".percent").css({"display": "none"});
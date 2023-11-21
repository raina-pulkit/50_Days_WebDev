let ind = 0;
const n = $("img").length;

/*Get a smooth constantly running carousel*/

let interval = setInterval(run, 2000);

function run(){
    ind++;
    change();
}

function change(){
    if(ind > n-1){
        ind = 0;
    }
    else if(ind < 0){
        ind = n-1;
    }

    $("img").css({
        "transform": `translate(${-ind*500}px)`
    });
}

$("#left").click(() => {
    ind--;
    change();
});

$("#right").click(() => {
    ind++;
    resetInterval();
    change();
});

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run, 2000);
}
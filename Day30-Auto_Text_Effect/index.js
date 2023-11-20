const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, vel eligendi maxime consequuntur minus voluptate esse optio recusandae labore doloremque?";

let func = (x) => 3000/x;
let speed = func($("#speed")[0].value);
var ind = 1;

function write(){
    console.log(speed);
    $("h1").text(text.slice(0,ind));
    ind++;

    if(ind <= text.length){
        setTimeout(write, speed);
    }
    if(ind > text.length)
        ind = 1;
}

$("h1").text("");
write();

$("#speed").on("input", () => {
    $("h1").text("");
    ind = 1;

    var id = window.setTimeout(function() {}, 0);
    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }
    
    speed = func($("#speed")[0].value);
    write();
});
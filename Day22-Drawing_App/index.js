const context = $("#canvas")[0].getContext('2d');

var currColor = $("input")[0].value;
var currSize = "5";
const maxSize = 20;
var isPressed = false;

$(".size").text(currSize);

function drawCircle(x, y){
    context.beginPath();
    context.arc(x, y, currSize, 0, (Math.PI)*2, true);
    context.fillStyle = currColor;
    context.lineWidth = currSize;
    // context.stroke();   //Draws outline of the shape
    context.fill();     //Fills the shape of the arc
}

// drawCircle(200,200);

function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2, y2);
    context.strokeStyle = currColor;
    context.lineWidth = currSize*2;
    context.stroke();
}

// drawLine(0,0,200,200);


let xInitial = undefined;
let yInitial = undefined;

$("canvas").mousedown((e) => {
    isPressed = true;

    xInitial = e.offsetX;
    yInitial = e.offsetY;
});

$("canvas").mouseup((e) => {
    isPressed = false;

    xInitial = undefined;
    yInitial = undefined;
});


// $("canvas").mousemove((e) => {
//     if(isPressed){
//         const x = e.offsetX;
//         const y = e.offsetY;
        
//         drawCircle(x, y);
//     }
// });
// This can be done, but this causes dotted shapes if mouse if moved fast;


$("canvas").mousemove((e) => {
    if(isPressed){
        const x = e.offsetX;
        const y = e.offsetY;
        
        drawCircle(x, y);
        drawLine(xInitial, yInitial, x, y);
        // We draw both so the delay in listening for mouseevent is overcome

        xInitial = x;
        yInitial = y;
    }
});

$("#decrease").click(() => {
    if(currSize == maxSize){
        $("#increase").removeAttr("disabled");
    }
    if(currSize == 2){
        $("#decrease").attr("disabled", "true");
    }
    if(currSize >= 2){
        currSize--;
        $(".size").text(currSize);
    }
});

$("#increase").click(() => {
    if(currSize == 1){
        console.log("hi");
        $("#decrease").removeAttr("disabled");
    }
    if(currSize == maxSize-1){
        $("#increase").attr("disabled", "true");
    }
    if(currSize < maxSize){
        currSize++;
        $(".size").text(currSize);
    }
});

$("#increase").mousedown(() => {
    console.log("hi")
})

$("")

$("#clear").click(() => {
    context.clearRect(0,0,$("canvas").width(), $("canvas").height());
});

$("input").change((e) => {
    currColor = e.target.value;
});
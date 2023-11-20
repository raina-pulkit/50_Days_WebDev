let currActiveSlide = 0;
let leftSlides = $(".left-side div");
let rightSlides = $(".right-side div")
let n = leftSlides.length;

// leftSlides.each((ind, elem) => {
//     $(elem).css({
//         "transform": "translateY(-100%)"
//     });
// });

// rightSlides.each((ind, elem) => {
//     $(elem).css({
//         "transform": "translateY(100%)"
//     });
// });

$(leftSlides[currActiveSlide]).css({
    "transform": "translateY(0)"
});

$(rightSlides[currActiveSlide]).css({
    "transform": "translateY(0)"
});

function moveDown(){
    const past = currActiveSlide;
    if(currActiveSlide>0)
        currActiveSlide = (currActiveSlide-1);
    else
        currActiveSlide = n-1;
    placeSlide(currActiveSlide, past);
}

function moveUp(){
    const past = currActiveSlide;
    currActiveSlide = (currActiveSlide+1)%n;
    placeSlide(currActiveSlide, past);
}

function placeSlide(curr, past){
    $(leftSlides[past]).css({
        "transform": "translateY(100%)"
    });
    $(rightSlides[past]).css({
        "transform": "translateY(-100%)"
    });

    $(leftSlides[past]).css({
        "display": "none",
        "transform": "translateY(-100%)",
        "display": "flex"
    });

    $(rightSlides[past]).css({
        "display": "none",
        "transform": "translateY(100%)",
        "display": "flex"
    });

    $(leftSlides[curr]).css({
        "transform": "translateY(0)"
    });
    $(rightSlides[curr]).css({
        "transform": "translateY(0)"
    });



}



$(".down-btn").click(moveDown);

$(".up-btn").click(moveUp);
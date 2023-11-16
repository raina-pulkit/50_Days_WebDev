let activeSlide = 0;
const nums = 4;

function setBGandBody(){
    $($(".slide").get(activeSlide+1)).removeClass("active");
    $($(".slide").get(activeSlide-1)).removeClass("active");

    $($(".slide").get(activeSlide)).addClass("active");

    $("body").css({
        "background": `${$($(".slide")[activeSlide]).css("background")}`
    });
}

function makeLeftDisabled(){
    $(".left-arrow").attr("disabled", true);
}

function makeRightDisabled(){
    $(".right-arrow").attr("disabled", true);
}

makeLeftDisabled();
setBGandBody();

$(".left-arrow").click(() => {
    if(activeSlide === nums){
        $(".right-arrow").attr("disabled", false);
    }
    if(activeSlide === 1){
        $(".left-arrow").attr("disabled", true);
    }
    if(activeSlide !== 0){
        activeSlide--;
        setBGandBody();
    }
});

$(".right-arrow").click(() => {
    if(activeSlide === 0){
        $(".left-arrow").attr("disabled", false);
    }
    if(activeSlide === nums-1){
        $(".right-arrow").attr("disabled", true);
    }
    if(activeSlide !== nums){
        activeSlide++;
        setBGandBody();
    }
});
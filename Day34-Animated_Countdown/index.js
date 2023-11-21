const n = $(".nums span").length;
const nums = $(".nums span");
var lock = true;

function play(){
    document.querySelectorAll(".nums span").forEach((item, ind) => {
        item.addEventListener('animationend', (e) => {
            if(e.animationName === "come-in" && ind !== n-1){
                item.classList.remove("come-in");
                item.classList.add("go-out");
            }
            else if(e.animationName === "go-out" && item.nextElementSibling){
                e.target.classList.remove("go-out");
                item.nextElementSibling.classList.add("come-in");
            }
            else{
                $(".counter").addClass("hide");
                $(".final").addClass("show");
            }
        });
    });
}

play();

$("#replay").click(() => {
    nums[n-1].classList.remove("come-in");
    nums[0].classList.add("come-in");
    $(".final").removeClass("show");
    $(".counter").removeClass("hide");
    play();
});
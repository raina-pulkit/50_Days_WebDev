$(".number")[0].focus();

$(".number").each((ind, elem) => {
    $(elem).keydown((e) => {
        if((e.key <= 9 && e.key >= 0) && ind < 5){
            setTimeout(() => $(".number")[ind+1].focus(), 10);
        }
        else if(e.key === "Backspace" && ind>0){
            setTimeout(() => $(".number")[ind-1].focus(), 10)
        }
        else{
            $(e.target).val("");
        }
    })
});
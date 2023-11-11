$(".panel").not($(".text")).click((e) => {
    // console.log("I was clicked!" + e.target.classList);
    let x = e.target.classList;
    if(x.length === 0)
        ;
    else if(x.length === 3){
        $(".panel."+e.target.classList[1]).toggleClass("active");
    }
    else{
        $(".panel").removeClass("active");
        $(".panel."+e.target.classList[1]).toggleClass("active");
    }
});
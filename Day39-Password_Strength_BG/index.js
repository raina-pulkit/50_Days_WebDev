const initialFilter = $(".container").css("filter").slice(5, -3) - 0;

$("#password").on("input", (e) => {
    const blur = initialFilter - 3*e.target.value.length;
    if(blur >= 0){
        $(".container").css({
            "filter": `blur(${blur}px)`
        });
    }
});
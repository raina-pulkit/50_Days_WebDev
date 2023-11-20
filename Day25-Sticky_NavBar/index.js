var active = false;
const breakPt = 90;

$(document).scroll((e) => {
    const y = window.scrollY;
    if(y >= breakPt && !active){
        $("nav").toggleClass("active");
        active = true;
    }
    if(y < breakPt && active){
        $("nav").toggleClass("active");
        active = false;
    }
});
var left = $(".left");
var right = $(".right");
var container = $(".container");

left.mouseover(() => container.addClass("hover-left"));
right.mouseover(() => container.addClass("hover-right"));

left.mouseleave(() => container.removeClass("hover-left"));
right.mouseleave(() => container.removeClass("hover-right"));
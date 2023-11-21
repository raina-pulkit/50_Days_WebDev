const order = [];
const good = $("#good");
const fast = $("#fast");
const cheap = $("#cheap");


$(".toggle").change((e) => {
    if(good[0].checked && fast[0].checked && cheap[0].checked){
        if("good" === e.target.id)
            fast[0].checked = false;

        else if("cheap" === e.target.id)
            good[0].checked = false;

        else
            cheap[0].checked = false;
    }
})
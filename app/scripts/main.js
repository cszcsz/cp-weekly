$('a').click(function () {
        move();
})
function move(){
    $("#xin2").animate({top:'46px'},1500,"easeOutCirc",function(){

    });
  $("#xin1").animate({top:'33px'},1500,"easeOutCirc",function(){
    $("img").fadeOut("slow");
    setTimeout("window.location='next.html'",1000)
  });
}



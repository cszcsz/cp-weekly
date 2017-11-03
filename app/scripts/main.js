$('a').click(function () {
        move();
})
function move(){
    $("#xin2").animate({top:'48px'},2000,"easeOutCirc",function(){

    });
  $("#xin1").animate({top:'25px'},2000,"easeOutCirc",function(){
    $("img").fadeOut("slow");
    setTimeout("window.location='next.html'",1000)
  });
}



$('a').click(function () {
        move();
})
function move(){
    $("#xin2").animate({top:'30px'},"slow",function(){
      $("img").fadeOut("slow");
      setTimeout("window.location='next.html'",1000)
    });
}



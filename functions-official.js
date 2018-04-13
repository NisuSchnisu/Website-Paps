$("document").ready(function(){  
/*scroll funktion*/
  $(window).scroll(function(){

      var wScroll = $(this).scrollTop();


/*Schrift parallax*/
      $('#danielmaurer').css({
        'transform' : 'translate(0px, '+ wScroll /4 +'%)'
      });

/*Logo parallax*/
      $('#DM-logo').css({
        'transform' : 'translate(0px, '+ wScroll /20 +'%)'
      });

//Gallerie
      


      
  });

 
//Smooth Scrolle

  $("#startknopf").click(function() {
    $('html,body').animate({
      scrollTop: $("#übermich").offset().top},
        'slow');
  });


//Menü wenn screen klei
 
 






})//end vo de document ready funktion






















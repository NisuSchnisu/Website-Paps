$(document).ready(function(){
	$("nav a").click(function(){
//Gallerie bilderwechsel		
		//klassewechsel
		$("nav li.current").removeClass("current");
		$(this).parent().addClass("current")
		
		//heading text
		$("h1#heading").text($(this).text());

		//filter link text
		var category = $(this).text().toLowerCase().replace(' ','-');

		//klass entferne wenn alli bilder ahgluegt werde
		if(category == 'alle-bilder'){
			
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#gallery li').each(function() {
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		//stop link behaviour
		return false;
	});//end fotoswitch usw.


	

})//end document ready
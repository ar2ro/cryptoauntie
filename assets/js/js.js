function resizeCards(){
	var hotTallest = 0;
	var listTallest = 0;
	$('.hot-slider .card').attr('style', 'height: auto')
	$('.list .card').attr('style', 'height: auto')
	
	$('.hot-slider .card').each(function(i,v){
		if($(v).height() > hotTallest){
			hotTallest = $(v).height()
		}
	})
	$('.list .card').each(function(i,v){
		if($(v).height() > listTallest){
			listTallest = $(v).height()
		}
	})
	$('.hot-slider .card').each(function(i,v){
		if($(v).height() < hotTallest){
			$(v).attr('style', 'height: ' + hotTallest + 'px')
		}
	})
	$('.list .card').each(function(i,v){
		if($(v).height() < listTallest){
			$(v).attr('style', 'height: ' + listTallest + 'px')
		}
	})
}
function showRequirementsModal(target){
	var name         = $(target).attr('data-name');
	var instructions = $(target).find('.instructions')[0].innerHTML;
	var reflink      = $(target).attr('data-link');

	$('#requirementsModal .name').text(name);
	$('#requirementsModal .steps').html(instructions);
	$('#requirementsModal .btn-primary').attr('href', reflink)
	$('#requirementsModal').modal('show')
}
$(document).ready(function(){
	$('.hot-slider').slick({
		slidesToShow: 4,
	  infinite: true,
	  slidesToScroll: 1,
	  dots: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 772,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 560,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	}).removeClass('d-none');
	setTimeout(function(){ 
		resizeCards(); 
		$('[data-toggle="tooltip"]').tooltip();
	}, 1000);
	
});
$( window ).resize(function() {
  resizeCards();
});
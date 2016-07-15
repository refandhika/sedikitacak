var curTop, curLeft, newTop, newLeft;

$(document).ready(function(){

	$(".btn-circle").hover(function(){
		curTop = $(this).offset().top;
		curLeft = $(this).offset().left;
		newTop = curTop - 90;
		newLeft = curLeft - 90;
		if (!$(this).hasClass('animated')) {
			$(this).dequeue().stop().animate({ borderRadius:"200px", height:"200px", width: "200px", top: newTop+"px", left: newLeft+"px"});
			$(this).find('.in-text').animate({ marginTop: "91px" });
		}
	},	
	function() {
		newTop = Math.floor(Math.random() * 500) + 90
		newLeft = Math.floor(Math.random() * 1170) + 90
		$(this).find('.in-text').animate({ marginTop: "1px" });
	   	$(this).addClass('animated').animate({ borderRadius:"20px", height:"20px", width: "20px", top: newTop+"px", left: newLeft+"px"}, "normal", "linear", function() {
				$(this).removeClass('animated').dequeue();
			});
		});

	});
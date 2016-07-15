var curTop, curLeft, newTop, newLeft;

$(document).ready(function(){

	$('.btn-more').click(function() {
		$(this).find('.in-text').hide();
		$(this).find('.in-text').animate({ marginTop: "1001px" });
		$(this).addClass('animated').animate({ borderRadius:"2000px", height:"2000px", width: "2000px", top: "-700px", left: "-335px", zIndex: "3" }, "normal", "linear", function() {
			$(this).dequeue();
		});
		$(this).attr('style', 'pointer-event: none;');
		$(this).unbind('mouseenter mouseleave');
		$('.view-more').show();
		$('.btn-circle-x').show();
	});

	$('.btn-works').click(function() {
		$(this).find('.in-text').hide();
		$(this).find('.in-text').animate({ marginTop: "1001px" });
		$(this).addClass('animated').animate({ borderRadius:"2000px", height:"2000px", width: "2000px", top: "-700px", left: "-335px", zIndex: "3" }, "normal", "linear", function() {
			$(this).dequeue();
		});
		$(this).attr('style', 'pointer-event: none;');
		$(this).unbind('mouseenter mouseleave');
		$('.view-works').show();
		$('.btn-circle-x').show();
	});

	$('.btn-logs').click(function() {
		$(this).find('.in-text').hide();
		$(this).find('.in-text').animate({ marginTop: "1001px" });
		$(this).addClass('animated').animate({ borderRadius:"2000px", height:"2000px", width: "2000px", top: "-700px", left: "-335px", zIndex: "3" }, "normal", "linear", function() {
			$(this).dequeue();
		});
		$(this).attr('style', 'pointer-event: none;');
		$(this).unbind('mouseenter mouseleave');
		$('.view-logs').show();
		$('.btn-circle-x').show();
	});

	$('.btn-about').click(function() {
		$(this).find('.in-text').hide();
		$(this).find('.in-text').animate({ marginTop: "1001px" });
		$(this).addClass('animated').animate({ borderRadius:"2000px", height:"2000px", width: "2000px", top: "-700px", left: "-335px", zIndex: "3" }, "normal", "linear", function() {
			$(this).dequeue();
		});
		$(this).attr('style', 'pointer-event: none;');
		$(this).unbind('mouseenter mouseleave');
		$('.view-about').show();
		$('.btn-circle-x').show();
	});

	$('.btn-circle-x').click(function() {
		$(this).hide();
		$('.view-about').hide();
		$('.view-more').hide();
		$('.view-logs').hide();
		$('.view-works').hide();
		
		newTop = Math.floor(Math.random() * 500) + 90;
		newLeft = Math.floor(Math.random() * 1170) + 90;
		
		$('.btn-about').find('.in-text').animate({ marginTop: "1px" });
		$('.btn-about').addClass('animated').animate({ borderRadius:"20px", height:"20px", width: "20px", top: newTop+"px", left: newLeft+"px" }, "normal", "linear", function() {
			$('.btn-about').removeClass('animated').dequeue();
		});
		$('.btn-about').find('.in-text').show();
		//$('.btn-about').attr('style', 'cursor: pointer;');
		//$('.btn-about').bind('mouseenter mouseleave');

		newTop = Math.floor(Math.random() * 500) + 90;
		newLeft = Math.floor(Math.random() * 1170) + 90;

		$('.btn-more').find('.in-text').animate({ marginTop: "1px" });
		$('.btn-more').addClass('animated').animate({ borderRadius:"20px", height:"20px", width: "20px", top: newTop+"px", left: newLeft+"px" }, "normal", "linear", function() {
			$('.btn-more').removeClass('animated').dequeue();
		});
		$('.btn-more').find('.in-text').show();
		//$('.btn-more').attr('style', 'cursor: pointer;');
		//$('.btn-more').bind('mouseenter mouseleave');

		newTop = Math.floor(Math.random() * 500) + 90;
		newLeft = Math.floor(Math.random() * 1170) + 90;

		$('.btn-logs').find('.in-text').animate({ marginTop: "1px" });
		$('.btn-logs').addClass('animated').animate({ borderRadius:"20px", height:"20px", width: "20px", top: newTop+"px", left: newLeft+"px" }, "normal", "linear", function() {
			$('.btn-logs').removeClass('animated').dequeue();
		});
		$('.btn-logs').find('.in-text').show();
		//$('.btn-logs').attr('style', 'cursor: pointer;');
		//$('.btn-logs').bind('mouseenter mouseleave');

		newTop = Math.floor(Math.random() * 500) + 90;
		newLeft = Math.floor(Math.random() * 1170) + 90;

		$('.btn-works').find('.in-text').animate({ marginTop: "1px" });
		$('.btn-works').addClass('animated').animate({ borderRadius:"20px", height:"20px", width: "20px", top: newTop+"px", left: newLeft+"px" }, "normal", "linear", function() {
			$('.btn-works').removeClass('animated').dequeue();
		});
		$('.btn-works').find('.in-text').show();
		//$('.btn-works').attr('style', 'cursor: pointer;');
		//$('.btn-works').bind('mouseenter mouseleave');
	});

	$('.btn-circle').hover(function(){
		curTop = $(this).offset().top;
		curLeft = $(this).offset().left;
		newTop = curTop - 90;
		newLeft = curLeft - 90;
		if (!$(this).hasClass('animated')) {
			$(this).dequeue().stop().animate({ borderRadius:"200px", height:"200px", width: "200px", top: newTop+"px", left: newLeft+"px" });
			$(this).find('.in-text').animate({ marginTop: "91px" });
		}
	},	
	function() {
		newTop = Math.floor(Math.random() * 500) + 90;
		newLeft = Math.floor(Math.random() * 1170) + 90;
		$(this).find('.in-text').animate({ marginTop: "1px" });
		$(this).addClass('animated').animate({ borderRadius:"20px", height:"20px", width: "20px", top: newTop+"px", left: newLeft+"px" }, "normal", "linear", function() {
			$(this).removeClass('animated').dequeue();
		});
	});

});
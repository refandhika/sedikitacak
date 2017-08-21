
document.addEventListener("DOMContentLoaded", function(event) {

	var stflag = false;
	var smi = document.getElementById("skill-more-info");
	var st = document.getElementById("btn-skill-toggle");
	st.addEventListener("click", function(){
		if(!stflag){
			var hs = document.getElementsByClassName("skill-hidden");
			for(var i=0; i<hs.length; i++){
			    hs[i].style.display = "inline-block";
			}
			smi.innerHTML = "Now you had seen it all. What do you think?"
			st.innerHTML = "Hide";
			stflag = true;
		} else {
			var hs = document.getElementsByClassName("skill-hidden");
			for(var i=0; i<hs.length; i++){
			    hs[i].style.display = "none";
			}
			smi.innerHTML = "Why did you hide it in the first place if you want to show it again?"
			st.innerHTML = "Show Me Again!";
			stflag = false;
		}
		scrollToTop(document.body, 0, 1000);
	});
});

var scrollSpeed = 10;
function scrollToTop(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * scrollSpeed;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    scrollSpeed++;
    if (element.scrollTop == to) {
    	scrollSpeed = 10;
    	return;
    }
    scrollToTop(element, to, duration - 1);
  }, 10);
}
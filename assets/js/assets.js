$(document).ready(function(){

	var today = moment().format('MMMM Do YYYY');
	$('.left-foot').text(today);

	var year = moment().format('YYYY');
	$('.year').text(year);

});
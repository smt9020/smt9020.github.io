$(document).ready(function(){
    $("button").click(function () {
    	var value = 0;
        var num =  $(this).attr('value');
        value = value + +num;
        $('.progress-bar').width(value.toString()+'%'); 
    })
});
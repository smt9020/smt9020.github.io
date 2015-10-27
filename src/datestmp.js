
var list = [
    "hi",
    "hello",
    "howdy"
];

var htmlstring = "";

$(document).ready(function(){
    for (var i = 0; i < list.length; i++) {
           htmlstring = htmlstring + '<li class="list-group-item">' + list[i] +'</li>';
    }
    $('#taskList').html(htmlstring);
    $("#enterTask").click(function(){
        list.push($("#newTask").val());
        htmlstring = htmlstring + '<li class="list-group-item">' + $("#newTask").val() +'</li>';
        $('#taskList').html(htmlstring);
    })
    $("button").click(function () {
    	var value = 0;
        var num =  $(this).attr('value');
        value = value + +num;
        $('.progress-bar').width(value.toString()+'%'); 
    })
    $("#login").click(function () {
        $('.progress-bar').width('50%'); 
        if (($("#usr").val() == "Shannon") && ($("#pwd").val() == "password123")) {
        	alert("Success!");
        }
    })
});

function addNumbers(num1, num2) {
	return num1 + num2
}
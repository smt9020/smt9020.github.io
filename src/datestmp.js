
var list = [
    "hi",
    "hello",
    "howdy"
];

$(document).ready(function(){
    $("#enterTask").click(function(){
        list.push($("#newTask").val());
        $('#taskList').html(list);
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
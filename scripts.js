$(document).ready(function(){

	$(function(){	
		$(".divTask1").find("input").wrap("<form>");
	});
});	

//-----------------------------------------------------

$(".pTask2").click(function(){
	$(this).parent().css("border", "1px solid grey").css("background", "lightblue");
});		

//------------------------------------------------------

$(document).ready(function(){
	$("#inputTask3").next("button").text("Отправить");
	
	// По заданию нужно использовать метод closest(), но здесь логичнее работает next()
});

//------------------------------------------------------
	
	$("#inputTask3").next().click(startTimer);
		
		var secs = 0;	

		function startTimer(){
			if (timer) { 
				clearInterval(timer);
				secs = 0;
			}
		setInterval(timer, 1000);
		}
			function timer(){
				secs++;
               	if(secs==60) {
                	secs = 0;
            	}
                
				$("#inputTask3").val(secs);
			}

// -------------------------------------------------------

var input5 = $("#inputTask5");


var checkInput = function(){
	if(input5.change() == true){
    	input5.css("border", "3px solid green");
	} else {
		input5.css("border", "3px solid red");
	}
}

// не получается

// --------------------------------------------------------

$(function(){
	$("#divTask6").click(function(e) {
		var coords = e.pageX + " " + e.pageY;

		$(this).next().text("Click coordinates " + coords);
	});

});

// ---------------------------------------------------------

$(function(){
	
	$("#divTask7").hover(onIn, onOut);

});

function onIn(){
	$("#newDiv").css("display", "block");
}

function onOut(){
	$("#newDiv").css("display", "none");
}

//-----------------------------------------------------------

$(function(){

	var userInfo = {
		fName: "Tom",
		lName: "Tomson",
		eMail: "tom@gmail.com",
		pass: "12345"
	};

	function userInfoFill(event){
		$("#userForm > input[name=fName]").val(event.data.fName);
		$("#userForm > input[name=lName]").val(event.data.lName);
		$("#userForm > input[name=eMail]").val(event.data.eMail);
		$("#userForm > input[name=pass]").val(event.data.pass);
	}


	$("#autofill").on("click", userInfo, userInfoFill);

});
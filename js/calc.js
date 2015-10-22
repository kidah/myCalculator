var txt = "";
var dec= "."


function showVal(num) {
        var txt = document.getElementById("displaybox").value;
        txt = txt + num;
        if(displaybox.value.length > 30){
  	    var error = "Maximum length of characters reached!!!";
  	    displaybox.value = error;
        }
        else{
            document.getElementById("displaybox").value = txt;
        }
}

function clearNum() {
        txt = " ";
	document.getElementById("displaybox").value = txt;
}

function calculate() {
        txt = document.getElementById("displaybox").value;
        evaltxt = eval(txt);
        displaybox.value = evaltxt;
}

function toggle() {
	txt = document.getElementById("displaybox").value;
	if(txt == +txt){
            displaybox.value = -txt;
	}
	else if(txt == -txt) {
            displaybox.value = +txt;
	}
}

function point() {  
        if(displaybox.value.length == 0) {
            displaybox.value = "0";
        }
        else {
	    displaybox.value += dec;
        }
}

function squareroot() {
        txt = document.getElementById("displaybox").value;
        var txt2 = parseInt(txt);
        var answer = Math.sqrt(txt2);
        displaybox.value = answer;
}

function square() {
	txt = document.getElementById("displaybox").value;
        var txt2 = parseInt(txt);
        var answer = Math.pow(txt2, 2);
	displaybox.value = answer;
}

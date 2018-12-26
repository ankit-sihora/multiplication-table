var ch;
function myFunction(){
	var tab_val = document.getElementById('val').value;
	var tab = [];
		if (isNaN(tab_val)||tab_val==0) {
			document.getElementById("get").innerHTML = "";
			alert("please enter a number only");
		}
		else{
			text = "<ul>";
			for (var i=0; i<10; i++) {
				tab[i]=(i+1)*tab_val;
				text += "<li>" + tab_val +" * " + (i+1) + " = "+ tab[i] + "</li>";
			}
			text += "</ul>";
			document.getElementById("get").innerHTML = text;
		}
}

function sign(x){
	var answ="";
	document.getElementById("get3").innerHTML = x;
	var one = parseInt(document.getElementById('one').value);
	var two = parseInt(document.getElementById('two').value);
	if (isNaN(one)||isNaN(two) ){
		alert("not a number: enter two number");
	}
	else{
		var ans = one +x+ two +' = ';
		document.getElementById("get2").innerHTML = ans;
	}
	switch(x){
		case '-':
			answ=one-two;
			break;
		case '+':
			answ=one+two;
			break;
		case '*':
			answ=one*two;
			break;
		case '/':
			answ=one/two;
			break;
	}
	document.getElementById("get4").innerHTML = answ;
}
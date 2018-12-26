var state=false;
var str = "";
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
function on(){
	var ans="0";
	str="0";
	state=true;
	document.getElementById("a").value = "0";
 	document.getElementById("a").innerHTML = ans;
 	return;
}
function off(){
	var off="off"
	if(state==true){
		document.getElementById("a").value = '';
		document.getElementById("a").disabled = true;
		document.getElementById("a").placeholder = off;
		state=false;
		str="";
	}
}
function number(x){
	if(state==true){
		str=str+x;
		document.getElementById("a").value = str;
	}
}
function equ(){
	if(state==true){
		var ans = eval(str);
		document.getElementById("a").value = ans;
		//str="";
	}
	
}
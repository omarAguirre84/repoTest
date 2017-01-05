function publicaciones(){
	var load = "<img id='image' src='loading.gif' alt='LOADING...' />";
	document.getElementById('resultado').innerHTML = load;
	//var uname = form1.uname.value;
	//var msg = form1.msg.value;
	
	var xmlhttp = new XMLHttpRequest;

	//xmlhttp.open('GET','php/proc.php?uname='+uname+'&msg='+msg,true);
	xmlhttp.open('GET','proc.php',true);
	xmlhttp.send();
	console.log('proc');

	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState==4&&xmlhttp.status==200) {
			setTimeout(function(){
				document.getElementById('resultado').innerHTML = xmlhttp.responseText;
			},5000);			
		}
	}
}

function errores(){
	var load = "<img id='image' src='loading.gif' alt='LOADING...' />";
	document.getElementById('resultado').innerHTML = load;

	var xmlhttp = new XMLHttpRequest;

	//xmlhttp.open('GET','php/proc.php?uname='+uname+'&msg='+msg,true);
	xmlhttp.open('GET','proc.php',true);
	xmlhttp.send();
	console.log('proc');

	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState==4&&xmlhttp.status==200) {
			setTimeout(function(){
				document.getElementById('resultado').innerHTML = xmlhttp.responseText;
			},5000);
		}
	}
}

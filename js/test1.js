window.onload = function(){
	var images = document.getElementsByTagName("img");
	for(var i = 0;i<images.length;i++){
		var image = images[i];
		if(image.addEventListener){
			image.addEventListener("click",hide,false);
		}else{
			image.attachEvent("onclick",hide);
		}
	}
	function hide(event){
		event.target.style.visibility = "hidden";
	}
}
function hide(e,reflow){
	if(reflow){
		e.style.display = "none";
	}else{
		e.style.visibility = "hidden";
	}
}
function highlight(e){
	if(!e.className){
		e.className = "hilite";
	}else{
		e.className += " hilite";
	}
}
function moveon() {
	var answer = confirm("准备好了吗？");
	console.log(answer);
}

function debug(msg) {
	var log = document.getElementById("debuglog");
	if(!log) {
		log = document.createElement("div");
		log.id = "debuglog";
		log.innerHTML = "<h1>Debug Log</h1>";
		document.body.appendChild(log);
	}
	var pre = document.createElement("pre");
	var text = document.createTextNode(msg);
	pre.appendChild(text);
	log.appendChild(pre);
}
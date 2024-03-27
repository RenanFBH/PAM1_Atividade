window.onload = function() {
	let btn = document.getElementsByTagName("button")[0];
	let p = document.getElementsByTagName("p")[0];
	let cont = 0;
	
	btn.onclick = function(){
		cont++;
		p.innerHTML = cont;
	}
}

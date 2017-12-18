var banner = document.getElementsByClassName("banner")[0];
var key = document.getElementsByTagName("ol")[0].getElementsByTagName("li");
console.log(banner);
console.log(key);
var cout = 0;
var timer ;
function move(){
	clearInterval(timer);
	timer = setInterval(active, 2000);
}
move();
for(let i = 0; i < key.length; i++) {
	key[i].onmousemove = function() {
		clearInterval(timer);
		banner.style.background = "url(img/" + i + ".jpg";
		clear()
		this.className = "li-active";
	}
	key[i].onmouseout = function(){
		cout = i;
		move();
	}
}

// 清除classming
function clear() {
	for(var i = 0; i < key.length; i++) {
		key[i].className = "";
	}
}
//定时器方法
function active() {
	cout++;
	if(cout > 5) {
		cout = 0;
	}
	clear();
	key[cout].className = "li-active";
	banner.style.background = "url(img/" + cout + ".jpg)";

}
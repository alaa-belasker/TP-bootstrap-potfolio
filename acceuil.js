function date(){
var d = new Date();
var date = d.getDate() + '-' +(d.getMonth()+1) + '-' +d.getFullYear();
var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
document.getElementById("date").innerHTML = `Aujourd'hui c'est le ${date} <br> L'heure actuelle est ${hours}`
console.log(fullDate);}

function splitIt(){

// definiere variables

let kette = document.getElementById("kette").value;
let trennung = document.getElementById("trennung").value
let before = document.getElementById("before");
let after = document.getElementById("after");
let vorText =document.getElementById("vor-text");
let nachText = document.getElementById("nach-text");
    console.log(kette);
    event.preventDefault();

// splitten
let firstSplit = kette.split(trennung)
let secondSplit = trennung.length;
console.log(firstSplit);
console.log(secondSplit);

//  
if ((kette.indexOf(trennung) == -1) || 
secondSplit <= 0) {
    vorText.innerHTML = "Das Zeichen konnte leider nicht gefunden werden."
    nachText.innerHTML = kette;

} else if (before.checked) {
    vorText.innerHTML = firstSplit[0]
    nachText.innerHTML = trennung + firstSplit[1]
} else {
    vorText.innerHTML = firstSplit[0]+trennung;
    nachText.innerHTML = firstSplit[1]

}}
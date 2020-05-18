let request3 = new XMLHttpRequest();
request3.open('GET', './resources/descriptionPieText.txt', true);
request3.responseType = 'text';
request3.send();

let request4 = new XMLHttpRequest();
request4.open('GET', './resources/descriptionVerticalBar.txt', true);
request4.responseType = 'text';
request4.send();

function addToPie(arr) {
    document.getElementById("pieText").innerHTML = request3.responseText;
    for(let i=0; i<arr.length; i++){
        document.getElementById("pieText").innerHTML += " " + arr[i] + " ";
    }
}
function addToVerticalBar(arr) {
    document.getElementById("verticalBarText").innerHTML = request3.responseText;
    for(let i=0; i<arr.length; i++){
        document.getElementById("verticalBarText").innerHTML += " " + arr[i] + " ";
    }
}
let request1 = new XMLHttpRequest();
request1.open('GET', './resources/descriptionText0.txt', true);
request1.responseType = 'text';
request1.send();

let request2 = new XMLHttpRequest();
request2.open('GET', './resources/descriptionText1.txt', true);
request2.responseType = 'text';
request2.send();

function addToLi0(arr) {
    document.getElementById("1sub0").innerHTML = arr[0];
    document.getElementById("2sub0").innerHTML = arr[1];
    document.getElementById("3sub0").innerHTML = arr[2];
    document.getElementById("sub0").innerHTML = request1.responseText;
}
function addToLi1(arr) {
    arr = arr.reverse();
    document.getElementById("1sub1").innerHTML = arr[0];
    document.getElementById("2sub1").innerHTML = arr[1];
    document.getElementById("3sub1").innerHTML = arr[2];
    document.getElementById("sub1").innerHTML = request2.responseText;
}

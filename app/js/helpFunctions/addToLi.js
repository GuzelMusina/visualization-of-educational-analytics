let request1 = new XMLHttpRequest();
request1.open('GET', './resources/descriptionText0.txt', true);
request1.responseType = 'text';
request1.send();

let request2 = new XMLHttpRequest();
request2.open('GET', './resources/descriptionText1.txt', true);
request2.responseType = 'text';
request2.send();

function addToLi1(arr, id1, id2, id3, id4) {
    document.getElementById(id1).innerHTML = arr[0];
    document.getElementById(id2).innerHTML = arr[1];
    document.getElementById(id3).innerHTML = arr[2];
    document.getElementById(id4).innerHTML = request1.responseText;
}
function addToLi2(arr, id1, id2, id3, id4){
    arr = arr.reverse();
    document.getElementById(id1).innerHTML = arr[0];
    document.getElementById(id2).innerHTML = arr[1];
    document.getElementById(id3).innerHTML = arr[2];
    document.getElementById(id4).innerHTML = request2.responseText;
}


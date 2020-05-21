let request5 = new XMLHttpRequest();
request5.open('GET', './resources/descriptionCorrelationMatrix.txt', true);
request5.responseType = 'text';
request5.send();

function addToCorMatTxt(id) {
    document.getElementById(id).innerHTML = request5.responseText;
}
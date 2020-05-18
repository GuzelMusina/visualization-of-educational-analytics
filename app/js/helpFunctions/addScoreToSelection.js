let selectResult = document.getElementById("selectResult");
let newOption;
for(let i=2; i<100; i++){
    newOption = new Option(i, i);
    selectResult.append(newOption);
}

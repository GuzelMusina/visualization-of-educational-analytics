let selectedFile;
document.getElementById("fileUpload")
    .addEventListener("change", function (event) {
        selectedFile = event.target.files[0];
    });
document.getElementById("uploadExcel")
    .addEventListener("click", function () {
        if (selectedFile) {
            let fileReader = new FileReader();
            fileReader.onload = function (event) {
                let data = event.target.result;
                let workbook = XLSX.read(data, {
                    type: "binary"
                });
                workbook.SheetNames.forEach(sheet => {
                    let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                    let jsonObject = JSON.stringify(rowObject);
                    document.getElementById("jsonData").innerHTML = jsonObject;
                });
            };
            fileReader.readAsBinaryString(selectedFile);
            document.getElementById("nextText").hidden = !document.getElementById("nextButton").hidden;
            document.getElementById("nextButton").hidden = !document.getElementById("nextButton").hidden;
        }
    });
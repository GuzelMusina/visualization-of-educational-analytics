function elementDescription(id, i, gender, data) {

    let closer = document.getElementsByClassName("closer");
    let element = document.getElementById("modal_2");
    // let image = document.getElementById("gender");
    // if (gender === 1) {
    //     element.style.background = '#ee7988';
    //     image.src = "resources/female.png";
    // } else {
    //     element.style.background = '#4682b4';
    //     image.src = "resources/male.png";
    // }


    // let text = document.getElementById("fp-des-1");
    // htmlText = "<p>" + " ID : " + id + "<br/>" +
    //     "<br/>" + "Тип обучения : " + educationTypeInString(data.getEducationType[i]) + "<br/>" +
    //     "<br/>" + "Форма обучения : " + educationFormInString(1) + "<br/>" +
    //     "<br/><b>" + "Сумма баллов ЕГЭ : " + data.getEgeScoreReal[i] + "</b><br/>" +
    //     "<br/>" + data.subjectsArrEge[0] + " : " + data.sub1Ege[i] + "<br/>" +
    //     "<br/>" + data.subjectsArrEge[1] + " : " + data.sub2Ege[i] + "<br/>" +
    //     "<br/>" + data.subjectsArrEge[2] + " : " + data.sub3Ege[i] + "<br/>" +
    //     "<br/><b>" + "Сумма баллов Экзаменов : " + data.getExamScore[i] + "</b><br/>" +
    //     "<br/>" + data.subjectsArrEx[0] + " : " + data.sub1Ex[i] + "<br/>" +
    //     "<br/>" + data.subjectsArrEx[1] + " : " + data.sub2Ex[i] + "<br/>" +
    //     "<br/>" + data.subjectsArrEx[2] + " : " + data.sub3Ex[i] + "<br/>" + "</p>"
    // ;
    // closer.innerHTML = "";
    // text.innerHTML = htmlText;
    // alert("elementDesc" + chartData);
    // return chartData;

}

function educationTypeInString(edType) {
    return edType === 1 ? "Бюджет" : "Контракт"
}

function educationFormInString(edForm) {
    return edForm === 1 ? "Очная" : "Заочная"
}
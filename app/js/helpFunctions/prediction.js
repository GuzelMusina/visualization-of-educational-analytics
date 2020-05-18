function prediction(data) {
    document.getElementById("answerIs").innerHTML = ' ';
    document.getElementById("predict").onclick = function () {
        let subject = document.getElementById('selectSub').value;
        let result = document.getElementById('selectResult').value;

        let answerIs = 2;
        if (subject === 'ssub1') {
            document.getElementById("answerIs").innerHTML = ' ';
            for (let i = 0; i < data.sub1Ege.length; i++) {
                if (result == data.sub1Ege[i] || result == data.sub1Ege[i] - 1 || result == data.sub1Ege[i] - 2
                    || result == data.sub1Ege[i] + 1 || result == data.sub1Ege[i] + 2) {
                    answerIs = i;
                }
            }
            document.getElementById("answerIs").innerHTML = data.sub1Ex[answerIs];
        }
        if (subject === 'ssub2') {
            document.getElementById("answerIs").innerHTML = ' ';
            for (let i = 0; i < data.sub2Ege.length; i++) {
                if (result == data.sub2Ege[i] || result == data.sub2Ege[i] - 1 || result == data.sub2Ege[i] - 2
                    || result == data.sub2Ege[i] + 1 || result == data.sub2Ege[i] + 2) {
                    answerIs = i;
                }
            }
            document.getElementById("answerIs").innerHTML = data.sub2Ex[answerIs];
        }
        if (subject === 'ssub3') {
            document.getElementById("answerIs").innerHTML = ' ';
            for (let i = 0; i < data.sub3Ege.length; i++) {
                if (result == data.sub3Ege[i] || result == data.sub3Ege[i] - 1 || result == data.sub3Ege[i] - 2
                    || result == data.sub3Ege[i] + 1 || result == data.sub3Ege[i] + 2) {
                    answerIs = i;
                }
            }
            document.getElementById("answerIs").innerHTML = data.sub3Ex[answerIs];
        }
    }
}
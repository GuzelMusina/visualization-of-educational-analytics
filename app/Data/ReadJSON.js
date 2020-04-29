function getEgeSumArr(jsonObj) {
    let ege_sum_arr = [];
    for (let i = 0; i < jsonObj.length; i++) {
        ege_sum_arr.push(convertToScore(jsonObj[i].ege_bc1) + convertToScore(jsonObj[i].ege_bc2) + convertToScore(jsonObj[i].ege_bc3));
    }
    return ege_sum_arr;
}

function getExSumArr(jsonObj) {
    let ex_sum_arr = [];
    for (let i = 0; i < jsonObj.length; i++) {

        ex_sum_arr.push(jsonObj[i].ex_bc1 + jsonObj[i].ex_bc2 + jsonObj[i].ex_bc3);
    }
    return ex_sum_arr;
}

function getSubjectName(jsonObj) {
    let subjectsArr = [];
    subjectsArr.push(jsonObj[0].ege_c1);
    subjectsArr.push(jsonObj[0].ege_c2);
    subjectsArr.push(jsonObj[0].ege_c3);
    subjectsArr.push(jsonObj[0].ex_c1);
    subjectsArr.push(jsonObj[0].ex_c2);
    subjectsArr.push(jsonObj[0].ex_c3);

    return subjectsArr;
}

function getOneSubject1(jsonObj) {
    let oneSubjectArray = [];
    let oneSubjectArrayEge = [];
    let oneSubjectArrayEx = [];

    for (let i = 0; i < jsonObj.length; i++) {
        oneSubjectArrayEge.push(convertToScore(jsonObj[i].ege_bc1));
        oneSubjectArrayEx.push(jsonObj[i].ex_bc1);
    }

    oneSubjectArray.push(oneSubjectArrayEge);
    oneSubjectArray.push(oneSubjectArrayEx);

    return oneSubjectArray;
}

function getOneSubject2(jsonObj) {
    let oneSubjectArray = [];
    let oneSubjectArrayEge = [];
    let oneSubjectArrayEx = [];

    for (let i = 0; i < jsonObj.length; i++) {
        oneSubjectArrayEge.push(convertToScore(jsonObj[i].ege_bc2));
        oneSubjectArrayEx.push(jsonObj[i].ex_bc2);
    }
    oneSubjectArray.push(oneSubjectArrayEge);
    oneSubjectArray.push(oneSubjectArrayEx);

    return oneSubjectArray;
}

function getOneSubject3(jsonObj) {
    let oneSubjectArray = [];
    let oneSubjectArrayEge = [];
    let oneSubjectArrayEx = [];

    for (let i = 0; i < jsonObj.length; i++) {
        oneSubjectArrayEge.push(convertToScore(jsonObj[i].ege_bc3));
        oneSubjectArrayEx.push(jsonObj[i].ex_bc3);
    }
    oneSubjectArray.push(oneSubjectArrayEge);
    oneSubjectArray.push(oneSubjectArrayEx);

    return oneSubjectArray;
}

function convertToScore(ex_bc) {
    if (ex_bc >= 86) {
        return 5;
    } else if (ex_bc >= 71 && ex_bc < 86) {
        return 4;
    } else if (ex_bc >= 56 && ex_bc < 71) {
        return 3;
    } else if (ex_bc >= 0 && ex_bc < 56) {
        return 2;
    }
}
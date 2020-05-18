function getEducationType(jsonObj) {
    let array_of_education_type = [];
    for (let i = 0; i < jsonObj.length; i++) {
        array_of_education_type.push(jsonObj[i].ed_type);
    }
    return array_of_education_type;
}

function getGender(jsonObj) {
    let array_of_gender = [];
    for (let i = 0; i < jsonObj.length; i++) {
        array_of_gender.push(jsonObj[i].sex);
    }
    return array_of_gender;
}

function getFields(jsonObj) {
    return ["gender", "ed_type", "ege_sum", "ege_bc1", "ege_bc2", "ege_bc3", "ex_bc1", "ex_bc2", "ex_bc3"];
}

function getId(jsonObj) {
    let arr_id = [];
    for (let i = 0; i < jsonObj.length; i++) {
        arr_id.push(jsonObj[i].id);
    }
    return arr_id;
}

function getOneSubject1(jsonObj) {
    let oneSubjectArray = [];

    let oneSubjectArrayEx = [];
    let oneSubjectArrayEge = [];
    //let oneSubjectArrayName = [];
    for (let i = 0; i < jsonObj.length; i++) {
        oneSubjectArrayEx.push(jsonObj[i].ex_bc1);
        oneSubjectArrayEge.push(jsonObj[i].ege_bc1);
    }

    oneSubjectArray.push(oneSubjectArrayEx);
    oneSubjectArray.push(oneSubjectArrayEge);
    oneSubjectArray.push(jsonObj[0].ex_c1);
    oneSubjectArray.push(jsonObj[0].ege_c1);


    return oneSubjectArray;
}

function getOneSubject2(jsonObj) {
    let oneSubjectArray = [];
    let oneSubjectArrayEx = [];
    let oneSubjectArrayEge = [];
    for (let i = 0; i < jsonObj.length; i++) {
        oneSubjectArrayEx.push(jsonObj[i].ex_bc2);
        oneSubjectArrayEge.push(jsonObj[i].ege_bc2);
    }
    oneSubjectArray.push(oneSubjectArrayEx);
    oneSubjectArray.push(oneSubjectArrayEge);
    oneSubjectArray.push(jsonObj[0].ex_c2);
    oneSubjectArray.push(jsonObj[0].ege_c2);

    return oneSubjectArray;
}

function getOneSubject3(jsonObj) {
    let oneSubjectArray = [];
    let oneSubjectArrayEx = [];
    let oneSubjectArrayEge = [];

    for (let i = 0; i < jsonObj.length; i++) {
        oneSubjectArrayEx.push(jsonObj[i].ex_bc3);
        oneSubjectArrayEge.push(jsonObj[i].ege_bc3);
    }
    oneSubjectArray.push(oneSubjectArrayEx);
    oneSubjectArray.push(oneSubjectArrayEge);
    oneSubjectArray.push(jsonObj[0].ex_c3);
    oneSubjectArray.push(jsonObj[0].ege_c3);

    return oneSubjectArray;
}


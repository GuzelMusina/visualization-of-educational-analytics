function Data(egeScore, examScore, subjectsArr, subj1, subj2, subj3, array_of_gender, array_of_education_type, fields) {
    Object.defineProperties(this, {
            fields: {
                get() {
                    return fields;
                }
            },
            fieldsReverse: {
                get() {
                    return fields.reverse();
                }
            },
            getGender: {
                get() {
                    //1-ж, 0-м
                    return array_of_gender;
                }
            },
            getEducationType: {
                get() {
                    //1-бюджет, 0-контракт
                    return array_of_education_type
                }
            },
            getEgeScore: {
                get() {
                    return egeScore;
                }
            },
            getExamScore: {
                get() {
                    return examScore;
                }
            },
            sub1Ege: {
                get() {
                    return subj1[2];
                }
            },
            sub2Ege: {
                get() {
                    return subj2[2];
                }
            },
            sub3Ege: {
                get() {
                    return subj3[2];
                }
            },
            sub1EgeMod: {
                get() {
                    return subj1[0];
                }
            },
            sub2EgeMod: {
                get() {
                    return subj2[0];
                }
            },
            sub3EgeMod: {
                get() {
                    return subj3[0];
                }
            },
            sub1Ex: {
                get() {
                    return subj1[1];
                }
            },
            sub2Ex: {
                get() {
                    return subj2[1];
                }
            },
            sub3Ex: {
                get() {
                    return subj3[1];
                }
            },
            subjectsArrEge: {
                get: function () {
                    let newArr = [];
                    for (let i = 0; i < subjectsArr.length / 2; i++) {
                        newArr.push(subjectsArr[i])
                    }
                    return newArr;
                }
            },
            subjectsArrEx: {
                get: function () {
                    let newArr = [];
                    for (let i = subjectsArr.length / 2; i < subjectsArr.length; i++) {
                        newArr.push(subjectsArr[i])
                    }
                    return newArr;
                }
            },
        }
    );
}
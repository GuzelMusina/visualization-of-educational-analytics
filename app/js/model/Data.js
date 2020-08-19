function Data(ids, subj1, subj2, subj3, array_of_gender, array_of_education_type, fields) {
    Object.defineProperties(this, {
            ids: {
                get() {
                    return ids;
                }
            }, idsInString: {
                get() {
                    let idsString = [];
                    for (let i = 0; i < ids.length; i++) {
                        idsString.push(ids[i].toString());
                    }
                    return idsString;
                }
            },
            fields: {
                get() {
                    return fields;
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
                    return getSumOfScoreArr(subj1[2], subj2[2], subj3[2]);
                }
            },
            getEgeScoreReal: {
                get() {
                    return getSumOfScoreArr(subj1[1], subj2[1], subj3[1]);
                }
            },
            getExamScore: {
                get() {
                    return getSumOfScoreArr(subj1[0], subj2[0], subj3[0]);
                }
            },
            sub1Ege: {
                get() {
                    return subj1[1];
                }
            },
            sub2Ege: {
                get() {
                    return subj2[1];
                }
            },
            sub3Ege: {
                get() {
                    return subj3[1];
                }
            },
            sub1EgeMod: {
                get() {
                    return subj1[2];
                }
            },
            sub2EgeMod: {
                get() {
                    return subj2[2];
                }
            },
            sub3EgeMod: {
                get() {
                    return subj3[2];
                }
            },
            sub1Ex: {
                get() {
                    return subj1[0];
                }
            },
            sub2Ex: {
                get() {
                    return subj2[0];
                }
            },
            sub3Ex: {
                get() {
                    return subj3[0];
                }
            },
            subjectsArrEge: {
                get: function () {
                    let newArr = [];
                    newArr.push(subj1[4]);
                    newArr.push(subj2[4]);
                    newArr.push(subj3[4]);
                    return newArr;
                }
            },
            subjectsArrEx: {
                get: function () {
                    let newArr = [];
                    newArr.push(subj1[3]);
                    newArr.push(subj2[3]);
                    newArr.push(subj3[3]);
                    return newArr;
                }
            }
        }
    );
}
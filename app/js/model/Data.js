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
            egeScoreSub1: {
                get() {
                    return countAverage(subj1[0]);
                }
            },
            examScoreSub1: {
                get() {
                    return countAverage(subj1[1]);
                }
            },
            egeScoreSub2: {
                get() {
                    return countAverage(subj2[0]);
                }
            },
            examScoreSub2: {
                get() {
                    return countAverage(subj2[1]);
                }
            },
            egeScoreSub3: {
                get() {
                    return countAverage(subj3[0]);
                }
            },
            examScoreSub3: {
                get() {
                    return countAverage(subj3[1]);
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
            prediction: {
                get: prediction(this)
            }
        }
    );

    function countAverage(array) {
        let sum_array_elements = 0;
        for (let i = 0; i < array.length; i++) {
            sum_array_elements += array[i];
        }
        sum_array_elements = sum_array_elements / array.length;

        return sum_array_elements;
    }

}
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

            countCorrelation: {
                get: function () {
                    let correlation = 0;

                    let x_av = countAverage(examScore);
                    let y_av = countAverage(egeScore);

                    let up_part_cor = 0;
                    let down_part_cor_1 = 0;
                    let down_part_cor_2 = 0;

                    for (let i = 0; i < examScore.length; i++) {
                        up_part_cor = up_part_cor + ((egeScore[i] - x_av) * (examScore[i] - y_av));

                        down_part_cor_1 = down_part_cor_1 + ((egeScore[i] - x_av) * (egeScore[i] - x_av));
                        down_part_cor_2 = down_part_cor_2 + ((examScore[i] - y_av) * (examScore[i] - y_av));
                    }
                    correlation = up_part_cor / Math.sqrt(down_part_cor_1 * down_part_cor_2);
                    return Math.abs(correlation);
                }
            },
            countCorrelationForSubject1: {
                get: function () {
                    let correlation = 0;

                    let x_av = countAverage(subj1[0]);
                    let y_av = countAverage(subj1[1]);


                    let up_part_cor = 0;
                    let down_part_cor_1 = 0;
                    let down_part_cor_2 = 0;

                    for (let i = 0; i < subj1[0].length; i++) {
                        up_part_cor = up_part_cor + ((subj1[0][i] - x_av) * (subj1[1][i] - y_av));

                        down_part_cor_1 = down_part_cor_1 + ((subj1[0][i] - x_av) * (subj1[0][i] - x_av));
                        down_part_cor_2 = down_part_cor_2 + ((subj1[1][i] - y_av) * (subj1[1][i] - y_av));
                    }
                    correlation = up_part_cor / Math.sqrt(down_part_cor_1 * down_part_cor_2);
                    //alert(Math.abs(correlation));
                    return Math.abs(correlation);
                }
            },
            countCorrelationForSubject2: {
                get: function () {
                    let correlation = 0;

                    let x_av = countAverage(subj2[0]);
                    let y_av = countAverage(subj2[1]);


                    let up_part_cor = 0;
                    let down_part_cor_1 = 0;
                    let down_part_cor_2 = 0;

                    for (let i = 0; i < subj2[0].length; i++) {
                        up_part_cor = up_part_cor + ((subj2[0][i] - x_av) * (subj2[1][i] - y_av));

                        down_part_cor_1 = down_part_cor_1 + ((subj2[0][i] - x_av) * (subj2[0][i] - x_av));
                        down_part_cor_2 = down_part_cor_2 + ((subj2[1][i] - y_av) * (subj2[1][i] - y_av));
                    }
                    correlation = up_part_cor / Math.sqrt(down_part_cor_1 * down_part_cor_2);
                    //alert(Math.abs(correlation));
                    return Math.abs(correlation);
                }
            },
            countCorrelationForSubject3: {
                get: function () {
                    let correlation = 0;

                    let x_av = countAverage(subj3[0]);
                    let y_av = countAverage(subj3[1]);

                    let up_part_cor = 0;
                    let down_part_cor_1 = 0;
                    let down_part_cor_2 = 0;

                    for (let i = 0; i < subj3[0].length; i++) {
                        up_part_cor = up_part_cor + ((subj3[0][i] - x_av) * (subj3[1][i] - y_av));

                        down_part_cor_1 = down_part_cor_1 + ((subj3[0][i] - x_av) * (subj3[0][i] - x_av));
                        down_part_cor_2 = down_part_cor_2 + ((subj3[1][i] - y_av) * (subj3[1][i] - y_av));
                    }
                    correlation = up_part_cor / Math.sqrt(down_part_cor_1 * down_part_cor_2);
                    //alert(Math.abs(correlation));
                    return Math.abs(correlation);
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
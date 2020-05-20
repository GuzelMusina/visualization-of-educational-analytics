function getSumOfScoreArr(sub1, sub2, sub3) {

    //массив хранит сумму по каждому студенту баллов за егэ или экзамен
    let sum_arr = [];
    for (let i = 0; i < sub1.length; i++) {
        sum_arr.push(sub1[i]+ sub2[i] + sub3[i]);
    }
    return sum_arr;
}
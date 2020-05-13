function countCorrelation(firstObj, secondObj) {
    let correlation = 0;

    let x_av = 0;
    let y_av = 0;

    for (let i = 0; i < firstObj.length; i++) {
        x_av += firstObj[i];
        y_av += secondObj[i];
    }
    x_av = x_av / firstObj.length;
    y_av = y_av / secondObj.length;


    let up_part_cor = 0;
    let down_part_cor_1 = 0;
    let down_part_cor_2 = 0;

    for (let i = 0; i < firstObj.length; i++) {
        up_part_cor = up_part_cor + ((secondObj[i] - x_av) * (firstObj[i] - y_av));

        down_part_cor_1 = down_part_cor_1 + ((secondObj[i] - x_av) * (secondObj[i] - x_av));
        down_part_cor_2 = down_part_cor_2 + ((firstObj[i] - y_av) * (firstObj[i] - y_av));
    }
    correlation = up_part_cor / Math.sqrt(down_part_cor_1 * down_part_cor_2);
    return Math.abs(correlation);
}

function countAverage(array) {
    let sum_array_elements = 0;
    for (let i = 0; i < array.length; i++) {
        sum_array_elements += array[i];
    }
    sum_array_elements = sum_array_elements / array.length;
    return sum_array_elements;
}

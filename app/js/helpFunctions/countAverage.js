function countAverage(array) {
    let sum_array_elements = 0;
    for (let i = 0; i < array.length; i++) {
        sum_array_elements += array[i];
    }
    sum_array_elements = sum_array_elements / array.length;
    return sum_array_elements;
}
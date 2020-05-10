function getPlace(ownCorr, sub1Corr, sub2Corr, sub3Corr, arr) {
    //ищем минимальный разрыв общей корреляции и корреляции предмета
    let min = Math.abs(ownCorr - sub1Corr);
    let newArr = [];
    if (Math.abs(ownCorr - sub3Corr) > Math.abs(ownCorr - sub2Corr) && Math.abs(ownCorr - sub2Corr) < min) {
        newArr.push(arr[1]);
        if (Math.abs(ownCorr - sub3Corr) > min) {
            newArr.push(arr[0]);
            newArr.push(arr[2]);
        } else {
            newArr.push(arr[2]);
            newArr.push(arr[0]);
        }
    } else if (Math.abs(ownCorr - sub3Corr) < min) {
        newArr.push(arr[2]);
        if (Math.abs(ownCorr - sub2Corr) > min) {
            newArr.push(arr[0]);
            newArr.push(arr[1]);
        } else {
            newArr.push(arr[1]);
            newArr.push(arr[0]);
        }
    }
    newArr.push(arr[0]);
    newArr.push(arr[1]);
    newArr.push(arr[2]);

    return newArr;
}

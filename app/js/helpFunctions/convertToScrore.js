function convertToScore(score) {
    if (score === 5 || score === 4 || score === 3 || score === 2 || score === 1) {
        return score;
    } else {
        if (score >= 86) {
           score= 5;
        } else if (score >= 71 && score < 86) {
            score= 4;
        } else if (score >= 56 && score < 71) {
            score= 3;
        } else if (score >= 0 && score < 56) {
            score= 2;
        }
    }
    return score;
}
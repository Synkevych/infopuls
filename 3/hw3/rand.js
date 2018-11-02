var randomNamber = [];

function getRandom(num, symbolLength) {
    for (i = 0; i < num; i++) {
        randomNamber[i] = Math.round(Math.random() * symbolLength);
        //        if (i % 2 && (randomNamber[i] != 0)) {
        //            var minus = Math.round(Math.random());
        //            if (minus == 0) randomNamber[i] *= -1;
        //        }
    }
    return randomNamber;
}
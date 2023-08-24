export function searchAlgo(str, word) {
    const strL = str.toLowerCase();
    const wordL = word.toLowerCase().trim();

    for (let i = 0; i < strL.length; i++) {
        for (let j = 0; j < wordL.length; j++) {
            if (strL[i + j] !== wordL[j]) break;
            if (j + 1 === wordL.length) return i + '-' + (i + wordL.length);
        }
    }
    return false;
}
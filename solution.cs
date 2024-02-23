for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            word1Pos = i;
            if (word2Pos !== -1) {
                minDistance = Math.min(minDistance, word1Pos - word2Pos);
            }
        }
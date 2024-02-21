Here is a JavaScript console application that solves the problem:

```javascript
function shortestDistance(word1, word2, document) {
    let words = document.split(' ');
    let minDistance = words.length;
    let word1Pos = -1;
    let word2Pos = -1;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            word1Pos = i;
            if (word2Pos !== -1) {
                minDistance = Math.min(minDistance, word1Pos - word2Pos);
            }
        } else if (words[i] === word2) {
            word2Pos = i;
            if (word1Pos !== -1) {
                minDistance = Math.min(minDistance, word2Pos - word1Pos);
            }
        }
    }

    return minDistance;
}

console.log(shortestDistance('word1', 'word2', 'This is a document with word1 and word2 in it. word1 is closer to word2 in this sentence.'));
```

This console application defines a function `shortestDistance` that takes two words and a document as input. It splits the document into an array of words, then iterates over the array. If it encounters one of the input words, it updates the position of that word and checks if the other word has been encountered before. If so, it calculates the distance between the two words and updates the minimum distance if necessary. The function returns the minimum distance found. The console.log statement at the end calls the function with example inputs and logs the result.
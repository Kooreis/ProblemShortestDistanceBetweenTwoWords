Here is a TypeScript solution for the problem:

```typescript
class WordDistanceFinder {
    private wordLocations: Map<string, number[]>;

    constructor(document: string) {
        this.wordLocations = new Map<string, number[]>();
        const words = document.split(' ');
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (!this.wordLocations.has(word)) {
                this.wordLocations.set(word, []);
            }
            this.wordLocations.get(word)!.push(i);
        }
    }

    shortestDistance(wordOne: string, wordTwo: string): number {
        const locationsOne = this.wordLocations.get(wordOne);
        const locationsTwo = this.wordLocations.get(wordTwo);
        if (!locationsOne || !locationsTwo) {
            return -1;
        }
        let i = 0, j = 0, minDistance = Number.MAX_VALUE;
        while (i < locationsOne.length && j < locationsTwo.length) {
            minDistance = Math.min(minDistance, Math.abs(locationsOne[i] - locationsTwo[j]));
            if (locationsOne[i] < locationsTwo[j]) {
                i++;
            } else {
                j++;
            }
        }
        return minDistance;
    }
}

const finder = new WordDistanceFinder('the quick brown fox jumps over the lazy dog');
console.log(finder.shortestDistance('fox', 'the')); // 1
console.log(finder.shortestDistance('fox', 'dog')); // 4
console.log(finder.shortestDistance('fox', 'cat')); // -1
```

This solution first splits the document into words and stores the locations of each word in a map. Then, when asked for the shortest distance between two words, it retrieves the locations of the two words and finds the minimum distance between any two locations, one from each word. If either word is not found in the document, it returns -1.
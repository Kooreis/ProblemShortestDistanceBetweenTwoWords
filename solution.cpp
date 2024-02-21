```cpp
#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <climits>

int shortestDistance(std::string document, std::string word1, std::string word2) {
    std::istringstream iss(document);
    std::vector<std::string> words;
    std::string word;
    while (iss >> word) {
        words.push_back(word);
    }

    int minDistance = INT_MAX;
    int index1 = -1;
    int index2 = -1;

    for (int i = 0; i < words.size(); i++) {
        if (words[i] == word1) {
            index1 = i;
            if (index2 != -1) {
                minDistance = std::min(minDistance, index1 - index2);
            }
        } else if (words[i] == word2) {
            index2 = i;
            if (index1 != -1) {
                minDistance = std::min(minDistance, index2 - index1);
            }
        }
    }

    return minDistance;
}

int main() {
    std::string document = "This is a sample document. We are trying to find the shortest distance between two words in this document.";
    std::string word1 = "document";
    std::string word2 = "shortest";

    int distance = shortestDistance(document, word1, word2);
    std::cout << "The shortest distance between " << word1 << " and " << word2 << " is: " << distance << std::endl;

    return 0;
}
```
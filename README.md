# Question: How do you find the shortest distance between two words in a document? JavaScript Summary

The JavaScript console application is designed to find the shortest distance between two words in a document. The function 'shortestDistance' accepts three parameters: two words and a document. The document is split into an array of words. The function then iterates over this array, checking each word against the two input words. If it encounters one of the input words, it records the position of that word. If the other word has already been encountered, it calculates the distance between the two words. This distance is then compared to the current minimum distance, and if it's smaller, the minimum distance is updated. This process continues until all words in the document have been checked. The function then returns the smallest distance found between the two input words. The console.log statement at the end of the code is used to call the function with specific inputs and display the result.

---

# TypeScript Differences

The TypeScript solution uses a different approach to solve the problem compared to the JavaScript solution. It uses a class `WordDistanceFinder` to encapsulate the logic of finding the shortest distance between two words in a document. The class has a private member `wordLocations` which is a Map that stores the locations of each word in the document. This is done in the constructor of the class where the document is split into words and the locations of each word are stored in the map.

The `shortestDistance` method retrieves the locations of the two words from the map and finds the minimum distance between any two locations, one from each word. If either word is not found in the document, it returns -1. This method uses two pointers to traverse the locations of the two words and find the minimum distance.

The TypeScript solution uses features that are not available in JavaScript such as classes, private members, and type annotations. The use of a Map to store the locations of the words is also a feature that is not commonly used in JavaScript.

The TypeScript solution is more efficient than the JavaScript solution because it precomputes the locations of the words in the document. This makes the `shortestDistance` method faster because it does not need to traverse the entire document each time it is called. However, the TypeScript solution uses more memory because it stores the locations of all words in the document.

---

# C++ Differences

The C++ version of the solution follows a similar logic to the JavaScript version. It also defines a function `shortestDistance` that takes a document and two words as input, splits the document into a vector of words, and iterates over the vector. If it encounters one of the input words, it updates the position of that word and checks if the other word has been encountered before. If so, it calculates the distance between the two words and updates the minimum distance if necessary. The function returns the minimum distance found.

The main differences between the two versions are due to the differences in the languages themselves:

1. String Splitting: In JavaScript, the `split` method is used to split the document into an array of words. In C++, an `istringstream` is used to split the document into a vector of words.

2. Minimum Value: In JavaScript, the initial minimum distance is set to the length of the words array using `words.length`. In C++, the initial minimum distance is set to the maximum possible integer value using `INT_MAX`.

3. Minimum Function: In JavaScript, the `Math.min` function is used to calculate the minimum distance. In C++, the `std::min` function is used.

4. Output: In JavaScript, the `console.log` function is used to print the result. In C++, the `std::cout` stream is used.

5. Main Function: In JavaScript, the function is called directly in the global scope. In C++, the function is called inside the `main` function, which is the entry point of the program.

---

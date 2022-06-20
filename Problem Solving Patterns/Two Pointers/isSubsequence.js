// Write a function called isSubsequence that receives two strings as arguments
// Determine if all characters from the first string form a subsequence of the characters in the second string
// Return true if all characters in the first string appear in the same order in the second string
// Ideal time complexity linear O(N) where N is the number of characters in the second string
// Ideal space complexity constant O(1)



// Test Cases should all return true
console.log(isSubsequence("", "a") === true);
console.log(isSubsequence("b", "a") === false);
console.log(isSubsequence("a", "ab") === true);
console.log(isSubsequence("ab", "a") === false);
console.log(isSubsequence("ab", "ba") === false);
console.log(isSubsequence("ab", "abc") === true);
console.log(isSubsequence("abc", "xzyabc") === true);
console.log(isSubsequence("abc", "acb") === false);
console.log(isSubsequence("sing", "string") === true);
console.log(isSubsequence("hello", "hello world") === true);
console.log(isSubsequence("abc", "abracadabra") === true);

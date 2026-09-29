function isPalindrome(str) {
    const cleaned = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("hello")); 

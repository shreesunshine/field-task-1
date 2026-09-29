function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); 
console.log(removeDuplicates(["a", "b", "a", "c"])); 

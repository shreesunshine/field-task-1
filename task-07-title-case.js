function titleCase(str) {
    return str
        .toLowerCase()
        .split(/\s+/)
        .filter(word => word.length > 0)
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(titleCase("i love coding")); 
console.log(titleCase("jAVASCRIPT IS FUN")); 

function calculateDifference(a,b){
    let sub=a-b;
    return sub;
}
 let res=calculateDifference(20,10);
console.log(res);
function isOdd(arg) {
    if (arg % 2 !== 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isOdd(5)

function findMin(murgi){
    return Math.min(...murgi);
}
console.log(findMin([8,9,6,4,3]))

function filterEvenNumbers(arr){
    return arr.filter(romi=> romi %2 ===0);
}
console.log(filterEvenNumbers([8,9,6,4,3]))

function sortArrayDescending(arr){
    return arr.sort((a, b) => b - a);
}
console.log(sortArrayDescending([8,9,6,4,3]))

function lowercaseFirstLetter(a){
    return a.charAt(0).toLowerCase()+a.slice(1)
}
console.log(lowercaseFirstLetter('RoMi'))

function countVowels(str){
    const vowels = 'aeiouAEIOU'
    let count = 0
    for(let letter of str){
        if(vowels.includes(letter)){
            count++
        }
    }
    return count
}
console.log(countVowels('romi'))

function findAverage(arr) {
    if (arr.length === 0) {
        console.log(0);
        return;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    const average = sum / arr.length;
    return average;
}
console.log(findAverage([8,9,6,4,3]))

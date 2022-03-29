
//Task - indexOf
// let array = [1, 2, 3, 4, 2, 5, 6, 7, 8];
//
// function indexOf (arr, item, index = 0){
//     for (let i = index; i <= arr.length-1; i++) {
//         if (arr[i] === item)
//             return console.log(i);
//     }
// }
//
// indexOf(array, 2, 3);

//Task - lastIndexOf
// let array = [1, 2, 3, 4, 2, 5, 6, 7, 8];
// function lastIndexOf (arr, item, index = arr.length - 1){
//     for (let i = index; i >= 0 ; i--) {
//         if (arr[i] === item)
//             return i;
//     }
//         return -1;
// }
//
// console.log(lastIndexOf(array, 2, 8))

//Task - find
// let array = ["Ваня", "Настя", "Юля", "Аркадий", "Игорь", "Руслан"];
//
// function find(element, arr){
//     for (let i = 0; i <= arr.length ; i++) {
//         if (arr[i] === element)
//             return arr[i];
//     }
//     return undefined;
// }
// console.log(find("Ваня", array))

//Task - findIndex
// let array = ["Ваня", "Настя", "Юля", "Аркадий", "Игорь", "Руслан"];
//
// function findIndex(element, arr){
//     for (let i = 0; i <= arr.length ; i++) {
//         if (arr[i] === element)
//             return i;
//     }
//     return -1;
// }
// console.log(findIndex("Юля", array))

//Task - includes
// let array = [1, 2, 3, 4, 2, 5, 6, 7, 8];
// function includes(item, arr){
//     for (let i = 0; i <= arr.length-1; i++) {
//        if (arr[i] === item){
//            return true;
//        }
//     }
//     return false;
// }
//
// console.log(includes(30, array))

//Task - every
// let array = [102, 102, 104, 106, 104, 101];
//
// function every(arr, callback){
//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (!callback(arr[i]))
//             return false;
//     }
//  return true;
// }
// function module(arg){
//    return arg % 2 === 0 ;
// }
//
// console.log(every(array, module))

//Task - some
let array = [103, 105, 111, 107, 109, 101];

function some(arr, callback){
    for (let i = 0; i <= arr.length - 1; i++) {
        if (callback(arr[i]))
            return true;
    }
    return false;
}
function module(arg){
    return arg % 2 === 0 ;
}

console.log(some(array, module))
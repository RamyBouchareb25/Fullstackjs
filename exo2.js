let arr = [ -3, 8, 7, 6, 5, 7, 3, 2, 1 , 2, -4],
x = 7;
function removeDup(array) {
    for (let i =0; i< array.length ; i++) {
        for (let j = i+1 ; j<array.length ; j++) {
            if (array[i] === array[j]) {
                for (let k =j+1; k<array.length; k++) {
                    array[k-1] = array[k];
                }
                array.length --;
            }
        }
    }
}
function removeElement(array, element) {
        for (let i=0; i<array.length; i++) {
            if (array[i] === element) {
                for (let j=i+1; j<array.length; j++) {
                    array[j-1] = array[j];
                }
                array.length --;
            }
        }
}
console.log(arr);
removeElement(arr, -3);
removeDup(arr);
console.log(arr);
console.log(arr.splice());
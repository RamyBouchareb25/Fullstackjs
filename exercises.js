// exercise 1 :


let object1 = {
    first: "test" ,
    second : "test1",
}
let object2 = {
    first: "test" ,
    second : "test1",
}
function compareObj(obj1, obj2) {
    var stop = false ;
    var i = 0;
    while(!stop) {
        if(Object.values(obj1)[i] === undefined || Object.values(obj2)[i] === undefined){
            stop = true;
        }
        if(Object.values(obj1)[i] !== Object.values(obj2)[i]) {
            return false;
        }
        i++;
    }
    return true;
}
console.log(compareObj(object1, object2));
// exercise 2 :


function difference(arr1, arr2) {
    var k = 0;
    var l =0 ;
    let array3 = [];
    let repeated = false;
    for(let i=0;i<arr1.length; i++) {
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]) {
                repeated = false;
                l=0;
                while(l<array3.length && !repeated) {
                    if(array3[l] === arr1[i]) {
                        repeated = true;
                    }
                    l++;
                }
                    if(!repeated) {
                        array3[k] = arr1[i];
                        k++;
                    }
            }
        }
    }
    return array3;
}
let array1 = [1, 3 ,4, 3, 7, 5 , 2];
let array2 = [2, 3 , 5 , 7, 9];
console.log(difference(array1, array2));

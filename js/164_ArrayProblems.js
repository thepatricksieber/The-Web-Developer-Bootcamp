function printReverse(array) {
    for (i = array.length; i >= 0; i--) {
        console.log(array[i]);
    }
}
printReverse(["test", "bla", "blubb"])


function isUniform(array) {

    var first = array[0];
    var value = true;
    array.forEach(function(el) {
        if(el !== first) {
            value = false
        }
    });
    console.log(value)
}
isUniform([1,1,1,1,1,4,1,1,1,1,1])


function sumArray(array) {
    var sum = 0
    array.forEach(function(el){
        sum += el
    })
    console.log(sum)
}
sumArray([8,7,-100])


function max(array) {
    var highest = array[0]
    array.forEach(function(el){
        if (el > highest) {
            highest = el
        }
    })
    console.log("Max value is: " + highest)
}
max([1,4,9,4,7])
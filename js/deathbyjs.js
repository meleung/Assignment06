/*eslint-env browser*/

//STEP 1
//function alphabetize(input) {
//    "use strict";
//    return input.split("").sort().join("");
//}
//var input, output;
//input = window.prompt("Enter a string");
//output = alphabetize(input);
//window.console.log("You entered: " + input + "\nResult: " + output);

//STEP 2
//function capitalize(input) {
//    "use strict";
//    var result, i;
//    result = input.split(" ");
//    for (i = 0; i < result.length; i += 1) {
//        if (result[i].length === 1) {
//            result[i] = result[i][0].toUpperCase();
//            
//        } else if (result[i].length > 1) {
//            result[i] = result[i][0].toUpperCase() + result[i].substr(1);
//        }
//    }
//    return result.join(" ");
//}
//var input, output;
//input = window.prompt("Enter a string");
//output = capitalize(input);
//window.console.log("You entered: " + input + "\nResult: " + output);

//STEP 3
//function vowelCount(input) {
//    "use strict";
//    var result;
//    result = input.match(/[aeiouAEIOU]/g);
//    return result.length;
//}
//var input, output;
//input = window.prompt("Enter a string");
//output = vowelCount(input);
//window.console.log("You entered: " + input + "\nResult: " + output);

//STEP 4
//function randomString(size) {
//    "use strict";
//    var result, i, charSet;
//    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
//    result = [];
//    for (i = 0; i < size; i += 1) {
//        result[i] = charSet.charAt(Math.floor(Math.random() * charSet.length));
//    }
//    return result.join("");
//}
//
//var input, output;
//
//input = window.prompt("Input an ID size");
//
//if (isNaN(input)) {
//    window.console.log("Invalid ID size.");
//} else {
//    output = randomString(parseInt(input, 10));
//    window.console.log("Result: " + output);
//}


//STEP 5

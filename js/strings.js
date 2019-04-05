/*eslint-env browser*/

//STEP 1
//var name = window.prompt("Please enter your name.").trim();
//window.alert("'" + name + "' has " + (name.replace(/(\W|\s)/g, "").length - 1) + " letters in it.");

//STEP 2
//var name = window.prompt("Please enter your name.").trim();
//// Only counting printable characters.
//var nameParsed = name.replace(/(\W|\s)/g, "");
//var n = parseInt(window.prompt("Please enter a number"), 10);
//
//if (isNaN(n)) {
//    window.alert("Please enter a valid number.");
//} else if (n > (nameParsed.length - 1)) {
//    window.alert("The name '" + name + "' does not have a letters at " + n + ".");
//} else {
//    window.alert("The name '" + name + "' has the letter '" + nameParsed.charAt(n) + "' at " + n + ".");
//}


//STEP 3
//var firstName, lastName;
//firstName = window.prompt("Please enter your first name.");
//lastName = window.prompt("Please enter you last name.");
//window.alert("You name is: ".concat(firstName).concat(" ").concat(lastName));

//STEP 4
//var text = "The quick brown fox jumps over the lazy dog";
//window.alert("\"" + text + "\"\n'fox' is at index " + text.indexOf("fox"));

//STEP 5
//var text = "The quick brown fox jumps over the lazy fox";
//window.alert("\"" + text + "\"\nThe last 'fox' is at index " + text.lastIndexOf("fox"));

//STEP 6
//var text = "The quick brown fox jumped over the lazy dog";
//var name = window.prompt("Please enter your name.").trim();
//var output = text.replace("the lazy dog", name);
//window.alert(output);

//STEP 7
//var text = "The quick brown fox jumps over the lazy dog";
//var word = window.prompt("Please enter a word").trim();
//var n = text.indexOf(word);
//if (n === -1) {
//    window.alert("\"" + text + "\"\nUnable to find '" + word + "' in the text.");
//} else {
//    window.alert("\"" + text + "\"\nFound '" + word + "' at index " + n + ".");
//}

//STEP 8
//var old_string = "The quick brown fox jumps over the lazy dog";
//var new_string = old_string.substr(31, 12);
//window.alert(new_string.toUpperCase());

//STEP 9
//var text = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
//window.alert(text.trim().toLowerCase());

//STEP 10

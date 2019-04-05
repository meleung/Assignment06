/*eslint-env browser*/

//STEP 1
//var month, year, date, months;
//months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//
//month = window.prompt("Enter a month as a digit:\nE.g., January = 1, February = 2, etc.");
//year = window.prompt("Enter a year");
//
//if (isNaN(month) || isNaN(year)) {
//    window.console.log("Please enter valid numbers for the month and year");
//} else {
//    month = parseInt(month, 10);
//    if (month < 1 || month > 12) {
//        window.console.log("Please enter a valid month.");
//    } else {
//        year = parseInt(year, 10);
//        date = new Date(year, month, 0);
//        window.console.log("There are " + date.getDate() + " days in " + months[date.getMonth()] + " " + (date.getYear() + 1900));
//    }
//}

//STEP 2
//var inputDate, date, months, pattern;
//months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//
//inputDate = window.prompt("Please enter a date. (MM/DD/YYYY)").trim();
//pattern = new RegExp("^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$");
//if (!pattern.test(inputDate)) {
//    window.console.log(inputDate + " is not a valid date in the format (MM/DD/YYYY).");
//} else {
//    date = new Date(inputDate);
//    window.console.log(inputDate + " is in the month of " + months[date.getMonth()]);
//}

//STEP 3
//var inputDate, date, pattern;
//
//inputDate = window.prompt("Please enter a date. (MM/DD/YYYY)").trim();
//pattern = new RegExp("^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$");
//if (!pattern.test(inputDate)) {
//    window.console.log(inputDate + " is not a valid date in the format (MM/DD/YYYY).");
//} else {
//    date = new Date(inputDate);
//    if (date.getDay() === 0 || date.getDay() === 6) {
//        window.console.log(inputDate + " is on a weekend.");
//    } else {
//        window.console.log(inputDate + " is on a weekday.");
//    }
//}

//STEP 4

//STEP 5

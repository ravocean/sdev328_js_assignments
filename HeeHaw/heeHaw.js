/*
Author: Husrav Khomidov
File: heeHaw.js
 */

function heeHaw() {

    //Get user's input and declare to num
    let num = document.getElementById("userNum").value;
    let str = ""

    //If input is not a positive number, throw an error
    if (num < 1 || isNaN(num)){
        let element = document.getElementById("error");
        element.classList.remove("d-none");
    } else {

        //Remove the error message after positive number entered
        let element = document.getElementById("error");
        element.classList.add("d-none");

        //Loop the amount of time user entered
        for (let i = 1; i <= num; i++) {
            if (i % 15 == 0) {
                str = str + "HeeHaw!"+ "<br>";
            }
            else if (i % 5 == 0) {
                str = str + "Haw!"+ "<br>";
            }
            else if (i % 3 == 0) {
                str = str + "Hee!"+ "<br>";
            }
            else {
                str = str + "" + i + "<br>";
            }
        }
        document.getElementById("text").innerHTML = str;
    }
}
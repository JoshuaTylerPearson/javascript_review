/*global console*/

// basic implamentation of fizzbuzz

(function () {
    "use strict"; // JSLint strict wrapper


    function fizzBuzz(current, end) {
        /*
        returns a string of numbers from 'current' to 'end'
        with every multiple of 3 replaced with "Fizz"
        and every multiple of 5 replaced by "Buzz"
        and multiples of both replaced with "FizzBuzz"
        */

        var output = "", line;

        for (current; current <= end; current += 1) {
            line = "";
            if ((current % 3) === 0) {
                line += "Fizz";
            }
            if ((current % 5) === 0) {
                line += "Buzz";
            }

            if (line === "") {
                line = current;
            }
            output += line + "\n";
        }
        return output;
    }

    console.log(fizzBuzz(1, 15));

}());

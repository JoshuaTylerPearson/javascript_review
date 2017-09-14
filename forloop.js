/*global console*/

(function () {
    "use strict"; // JSLint strict wrapper

    function loop(count, cap, crement, method) {

        if (count <= cap) {
            for (count; count <= cap; count += crement) {
                method(count);
            }
        } else {
            for (count; count >= cap; count -= crement) {
                method(count);
            }
        }
    }

    loop(0, 5, 1, function (n) { console.log(n); });

    // IIFE (immediately invoked function expression version)
    (function loop(count, cap, crement, method) {

        if (count <= cap) {
            for (count; count <= cap; count += crement) {
                method(count);
            }
        } else {
            for (count; count >= cap; count -= crement) {
                method(count);
            }
        }
    }(5, 0, 1, function (n) { console.log(n); }));

}());

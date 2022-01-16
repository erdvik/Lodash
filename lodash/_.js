const _ = {
    clamp: (num, lower, upper) => Math.min(Math.max(num, lower), upper),

    inRange(number, start=0, end) {
        if (end == undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
        }
        return (number >= start && number < end) ? true : false; //number in range?
    },

    words: (str) => str.split(' '),

};




// Do not write or modify code below this line.
module.exports = _;
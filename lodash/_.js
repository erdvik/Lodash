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

    words: (str='') => str.split(' '),

    pad(str, len) {
        if (str.length >= len) return str;
        let left = Math.floor((len - str.length) / 2);
        let right = len - (str.length + left);
        return `${' '.repeat(left)}${str}${' '.repeat(right)}`;
    },

    has: (obj, key) => obj[key] != undefined ? true : false,

    invert(obj) {
        invertObj = {};
        // let entries = Object.entries(obj);
        // for (let i=0; i < entries.length; i++) {
        //     let key = entries[i][1];
        //     let val = entries[i][0];
        //     invertObj[key] = val;
        // }
        // return invertObj;
        for (let key in obj) {
            originalVal = obj[key];
            invertObj[originalVal] = key;
        }
        return invertObj;
    },

    
};




// Do not write or modify code below this line.
module.exports = _;
const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;

    for (let v of arr){
        for (let h of v){
            if (h === '^^'){
                count++;
            }
        }
    }
    return count;
};

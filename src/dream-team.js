const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
    if (!Array.isArray(arr)){
        return false;
    }

    let res = "";
    let j = 0;

    arr = arr.sort();

    for (let i = 0; i < arr.length; i++ ){
        if (typeof(arr[i]) === "string" && arr[i][0] !== " "){
            res += arr[i][0].toUpperCase();
        }
        if (typeof(arr[i]) === "string" && arr[i][0] === " "){
            while (arr[i][j] === " "){
                j++;
            }
            res += arr[i][j].toUpperCase();
            j=0;
        }
    }

    return res.split('').sort().join("");
};

const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  // throw new CustomError('Not implemented');
  // // remove line with error and write your code here
  let resarr = [];
    let j = 0;

    for (let i = 0; i < arr.length; i++){
        resarr.push(arr[i]);

        if (arr[i] === "--double-next"){
            if (i === arr.length - 1){
                resarr.pop();
                return resarr;
            }
            else{
                resarr[j] = arr[i+1];
            }
        }
        if (arr[i] === "--discard-prev"){
            resarr.pop();
            resarr.pop();
            break;
        }
        if (arr[i] === "--double-prev"){
            if (i === 0){
                resarr.pop();
            }
            else{
                resarr[j] = resarr[j-1];
                break;
            }
        }
        if (arr[i] === "--discard-next"){
            i+=2;
        }
        j++;
    }
    return resarr;
};

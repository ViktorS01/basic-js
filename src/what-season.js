const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // // remove line with error and write your code here
  if (arguments.length === 0){
    return 'Unable to determine the time of year!';
  }

  if (toString.call(date) !== '[object Date]'){
    throw new Error("THROWN");
  }

  switch (date.getMonth()){
    case 0: 
      return 'winter';
    case 1:
      return 'winter';
    case 2:
      return 'spring';
    case 3:
      return 'spring';
    case 4:
      return 'spring';
    case 5:
      return 'summer';
    case 6:
      return 'summer';
    case 7:
      return 'summer';
    case 8:
      return 'autumn';
    case 9:
      return 'autumn';
    case 10:
      return 'autumn';
    case 11:
      return 'winter';
    default:
      return "Unable to determine the time of year!";
}

};

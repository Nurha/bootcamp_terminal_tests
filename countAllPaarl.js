module.exports = function countAllPaarl(regList) {
    var counter = 0;
    var spiltRegList = regList.split(',');

for (var i = 0; i < spiltRegList.length; i++) {
      var carRegList = spiltRegList[i].trim();
      if(carRegList.startsWith('CJ')){
      counter ++
   }
}
// console.log(counter);
return counter
}
module.exports = function countAllFromTown(regList, regArea) {
  
    var numberFromArea = 0;
    var splitRegList = regList.split(',');
    // console.log(splitRegList);
    for (var i = 0; i < splitRegList.length; i++){
      var carReg = splitRegList[i].trim();
        // console.log(carReg);
      if (carReg.startsWith(regArea)){
          numberFromArea ++;
      } 
    }
    // console.log(numberFromArea);
    return numberFromArea;
  }
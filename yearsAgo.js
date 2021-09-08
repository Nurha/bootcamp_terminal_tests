module.exports = function yearsAgo(year){

    const date = new Date();

    var currentYear = date.getFullYear();
    
    var calculation = currentYear - year;
    
    return calculation;
  }


  

  
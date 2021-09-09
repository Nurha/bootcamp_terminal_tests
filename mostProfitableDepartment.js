module.exports = function mostProfitableDepartment(data){

	var deparmentMap = {};

	for (var i=0; i<data.length; i++) {
		var listData = data[i];
		deparmentMap[listData.department] = 0;
	}

	//console.log(deparmentMap);

	for (var i=0; i<data.length; i++) {
		var listData = data[i];
		var currentTotal = deparmentMap[listData.department];
		currentTotal += listData.sales;
		deparmentMap[listData.department] = currentTotal;
	}
  
  	var topSales = 0;
	var topDepartment = '';
  
  	for(var department in deparmentMap) {
    	// console.log(department);
		// console.log(deparmentMap[department]);
      	var currentSales = deparmentMap[department];
      		if(currentSales > topSales) {
			 topSales = currentSales;
			 topDepartment = department;
		}
    }
	
  	return topDepartment
}
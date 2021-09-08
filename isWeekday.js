module.exports = function isWeekday(day){
	var result = day.startsWith('Mon') || day.startsWith('Tues')|| day.startsWith('Wed') || day.startsWith('Thurs') || day.startsWith('Fri');
  	return result
}
module.exports = function totalPhoneBill(account) {
	var calls = 0;
  	var sms = 0;
  
  	var splitAccount = account.split(',');
  
  for (var i = 0;  i < splitAccount.length; i++) {
  	var bill = splitAccount[i].trim();
    // console.log(bill);
    if(bill.startsWith('ca')) {
    	calls ++;
    } else if (bill.startsWith('sm')) {
    	sms ++;
    }
  }
  calls *= 2.75;
  sms *= 0.65
  var sum = calls + sms
  var totalB = sum.toFixed(2);
  
  return 'R' + totalB
}
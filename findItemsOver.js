module.exports = function findItemsOver(list, num){

    var itemsOver = [];
  
    for(var i=0; i<list.length; i++) {
      var item = list[i];
     if(item.qty > num) {
       itemsOver.push(item);
     }
    }
    return itemsOver
  }
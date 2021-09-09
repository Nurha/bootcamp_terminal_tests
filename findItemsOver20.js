module.exports = function findItemsOver20(list){

    var itemsOver = [];
  
    for(var i=0; i<list.length; i++) {
      var item = list[i];
     if(item.qty > 20) {
       itemsOver.push(item);
     }
    }
    console.log(itemsOver)
    return itemsOver
  }
  
  function findItemsOver(list, num){
  
    var itemsOver = [];
  
    for(var i=0; i<list.length; i++) {
      var item = list[i];
     if(item.qty > num) {
       itemsOver.push(item);
     }
    }
    return itemsOver
  }
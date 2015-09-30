module.exports = {
  getMonthAbbr: function(intMonth){
    var months = new Array(12);
    months[0] = 'Jan';
    months[1] = 'Feb';
    months[2] = 'Mar';
    months[3] = 'Apr';
    months[4] = 'May';
    months[5] = 'Jun';
    months[6] = 'July';
    months[7] = 'Aug';
    months[8] = 'Sept';
    months[9] = 'Oct';
    months[10] = 'Nov';
    months[11] = 'Dec';
    return months[intMonth];
  },
  splitStringToArray: function(string,delimeter){
    var array = [];
    if(typeof string != 'undefined' && string.length > 0){
        if(string.indexOf(',') > 0){
            array = string.split(',');
        }else{
            array.push(string);
        }
    }
    return array;
  }
}
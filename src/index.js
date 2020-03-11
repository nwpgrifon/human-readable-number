module.exports = function toReadable (number) {
  let str = '', units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
      dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if(number == 0) return 'zero';
  switch(number.toString().length){
      case 1:
      {
        return units[number];
      }
      break;
      case 2:
          {
              if(number <= 20)
                  return units[number];
              else{
                  if(number.toString().split('')[1] > 0)
                      return dozens[number.toString().split('')[0]]+' '+units[number.toString().split('')[1]];
                  else
                      return dozens[number.toString().split('')[0]];
              }
          }
      break;
      case 3:
          {
              number = number.toString();
              str += units[number[0]]+' hundred';

              if(parseInt(number.split('')[1]) == 0 && parseInt(number.split('')[2]) == 0)
                  return str;

              if (parseInt(number.split('')[1] + number.split('')[2]) <= 20)
                  if(parseInt(number.split('')[1] + number.split('')[2]) <= 20 && parseInt(number.split('')[1] + number.split('')[2]) > 9)
                      return str+' '+units[number.split('')[1]+number.split('')[2]];
                  else
                      return str+' '+units[number.split('')[2]];
              else{
                  str += ' ' + dozens[number.split('')[1]];
                  if(number.split('')[2] > 0)
                    return str + ' ' + units[number.split('')[2]];
                  else
                      return str;
              }
          }
      break;
  }
}


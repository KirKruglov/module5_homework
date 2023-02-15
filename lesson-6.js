/* 
Дан массив. 
Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые.
 */

let arr = [1,1,1]
function sameValues(array) {
    return array.every((element,index,array)=>element===array[0]);
  } 
  console.log(sameValues(arr))
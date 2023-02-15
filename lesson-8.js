/* Создайте произвольный массив Map. 
Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
*/
let arrMap = new Map ([
    ["name","Kirill"],
    ["family","Kruglov"],
    ["age",40]
])

for (let element of arrMap){
    console.log(`Ключ-${element[0]}, Значение-${element[1]}`);
}

// C3.3. Прототип и конструктор объекта

// Задание 2
// Написать функцию, которая принимает в качестве аргументов строку и объект,
//  а затем проверяет, есть ли у переданного объекта свойство с данным именем.
//  Функция должна возвращать true или false.
function hasProp(string, obj){
  return (string in obj);
}

const myObject = {
  number: 123,
  isAnimal: true,
  kind: "dog",
  getWeight: function(){return 12;},
}

console.log(hasProp('secret', myObject)); // false
console.log(hasProp('kind', myObject)); // true

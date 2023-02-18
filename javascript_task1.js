// C3.3. Прототип и конструктор объекта

// Задание 1
// Написать, функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

function logOwnKeys(obj){
    for (let key in obj){
      if (obj.hasOwnProperty(key)){
        console.log(key+': '+obj[key])
      }
    }
}

const myObject = {
  prop1: 123,
  password: "udweugU",
  secret: "abracadabra",
  sayOK: function(){return 'All is correct.'},
}

logOwnKeys(myObject);
// prop1: 123
// password: udweugU
// secret: abracadabra
// sayOK: function(){return 'All is correct.'}
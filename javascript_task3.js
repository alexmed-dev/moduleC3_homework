// C3.3. Прототип и конструктор объекта

// Задание 3
// Написать функцию, которая создает пустой объект, но без прототипа.
function emptyObjCreate(){
  return Object.create(null);
}

empty = emptyObjCreate();
console.log(typeof empty); // object
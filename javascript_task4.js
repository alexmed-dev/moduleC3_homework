// C3.4. ООП в JS

// Задание 4
// Определить иерархию электроприборов. Реализовать на прототипах.

// Электроприбор
function ElektroDevice(name, power){
  this.name = name;
  this.isOn = false;
  this.power = power
}

// Включить прибор
ElektroDevice.prototype.deviceOn = function(){
  console.log(this.name + " is On.");
  this.isOn = true
}

// Выключить прибор
ElektroDevice.prototype.deviceOff = function(){
  console.log(this.name + " is Off.");
  this.isOn = false
}

// Определить мощность прирбора
ElektroDevice.prototype.getPower = function(){
  console.log("The power of "+ this.name + " is " + this.power)
}

// Электроприбор 1. Настольная лампа
function TableLamp(name, power, color){
  this.name = name;
  this.color = color;
  this.brightness = 1;
  this.power = power
}

TableLamp.prototype = new ElektroDevice()

// Метод, меняющий яркость лампы (по кругу: слабо-1 - сильно-2)
TableLamp.prototype.changeBrightness = function(){
  if (this.brightness == 1) {
    this.brightness = 2;
    console.log(this.name + " shines brightly.");
  } else {
    this.brightness = 1;
    console.log(this.name + " shines dimly.");
  }
}

// Электроприбор 2. Компьютер
function Computer(name, power, type){
  this.name = name;
  this.type = type;
  this.power = power
}

Computer.prototype = new ElektroDevice()
// Метод, перезагружающий компьютер
Computer.prototype.reload = function(){
  console.log(this.name + " will be reload.");
  this.deviceOff();
  this.deviceOn()
}

// Метод, запускающий программу на компьютере
Computer.prototype.runProg = function(prog){
  console.log(prog + " program launched on " + this.name);
}

// Создадим экземпляры
// Экземпляр лампы
const myLamp = new TableLamp('Electron', '75Вт', 'red');
// Определим мощность лампы
myLamp.getPower();
// Включить лампу
myLamp.deviceOn();
// Поменять яркость
myLamp.changeBrightness(); // brightly
myLamp.changeBrightness(); // dimly
// Выключить лампу
myLamp.deviceOff();

// Экземпляр компьютера
const myComp = new Computer('Acer', '150Вт', 'notebook');
// Определим мощность компьютера
myComp.getPower();
// Включить компьютер
myComp.deviceOn();
// Перезагрузить компьютер
myComp.reload();
// Запустить программу "Офис"
myComp.runProg("Офис");
// Выключить компьютер
myComp.deviceOff();

// Выведем созданные объекты
// Экземпляр лампы:
console.log(myLamp);
// Экземпляр компьютера
console.log(myComp);

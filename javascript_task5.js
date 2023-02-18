// C3.5. ООП в ES6

// Задание 5
// Определить иерархию электроприборов. Использовать классы.

// Электроприбор
class ElektroDevice {
  constructor(name, power){
    this.name = name;
    this.isOn = false;
    this.power = power
  }

  // Метод. Включить прибор
  deviceOn() {
    console.log(this.name + " is On.");
    this.isOn = true
  }

  // Метод. Выключить прибор
  deviceOff(){
    console.log(this.name + " is Off.");
    this.isOn = false
  }

  // Метод. Определить мощность прирбора
  getPower(){
    console.log("The power of "+ this.name + " is " + this.power)
  }
}



// Электроприбор 1. Настольная лампа
class TableLamp extends ElektroDevice {
  constructor(name, power, color){
    super(name, power);
    this.color = color;
    this.brightness = 1;
  }


  // Метод, меняющий яркость лампы (по кругу: слабо-1 - сильно-2)
  changeBrightness(){
    if (this.brightness == 1) {
      this.brightness = 2;
      console.log(this.name + " shines brightly.");
    } else {
      this.brightness = 1;
      console.log(this.name + " shines dimly.");
    }
  }
}


// Электроприбор 2. Компьютер
class Computer extends ElektroDevice {
  constructor(name, power, type){
    super(name, power);
    this.color = type;
  }

  // Метод, перезагружающий компьютер
  reload(){
    console.log(this.name + " will be reload.");
    this.deviceOff();
    this.deviceOn()
  }

  // Метод, запускающий программу на компьютере
  runProg(prog){
    console.log(prog + " program launched on " + this.name);
  }
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
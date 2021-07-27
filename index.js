// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says meow!`;
  }
}
let sasha = new Cat(`Sasha`, `female`);

sasha.speak();

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says woof!`;
  }
}
let Rufio = new Dog("Rufio", "Male");
Rufio.speak();

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    if (this.sex == "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else if (this.sex !== "male") {
      return `${this.name} says squawk!`;
    }
  }
}
let bird = new Bird("Pablo", "male");
bird.speak();

let bird2 = new Bird("Mable", "female");
bird2.speak();

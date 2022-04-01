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
  
  let cat = new Cat("Sasha", "female")
  console.log(cat.speak())

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says woof!`;
    }
}
  let dog = new Dog("Rufio", "male")
  console.log(dog.speak())


class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
speak() {
    if (this.sex == "male") {
        return `It's me! ${this.name}, the parrot!`;
    }
        else {
        return `${this.name} says squawk!`
    }
    
}  
} 

let bird = new Bird("Pablo", "male");
let bird2 = new Bird("Mable", "female");

console.log(bird.speak())
console.log(bird2.speak())
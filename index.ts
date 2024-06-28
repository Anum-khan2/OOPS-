// OOPS (oject oriented programming)
// class Person {
//     private name: string;
//     private age: number;
  
//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
  
//     public sayHello() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
//   const person = new Person('John Doe', 30);
// person.sayHello();

// class Employee extends Person {
//   private department: string;

//   constructor(name: string, age: number, department: string) {
//     super(name, age);
//     this.department = department;
//   }

//   public getDepartment() {
//     return this.department;
//   }
// }
// const employee = new Employee("John Doe", 30, "Sales");
// console.log(`Department: ${employee.getDepartment()}`)


// class Animal {
//   protected sound : string;

//   constructor (sound :string){
//     this.sound =sound;
//   }
//   public makesound(){
//     console.log(this.sound);
//   }
// }
//  class Dog extends Animal{
//   constructor(){
//     super("bark!");
//   }
//  }
//  const dog = new Dog()
//  dog.makesound();

//  class BankAccount {
//   private balance: number;

//   constructor(balance: number) {
//     this.balance = balance;
//   }

//   public deposit(amount: number) {
//     this.balance += amount;
//   }

//   public withdraw(amount: number) {
//     if (amount > this.balance) {
//       throw new Error('Insufficient balance.');
//     }
//     this.balance -= amount;
//   }

//   public getBalance(): number {
//     return this.balance;
//   }
// }

// const account = new BankAccount(1000);
// account.deposit(500);
// console.log(account.getBalance()); // Output: 1500
// account.withdraw(200);
// console.log(account.getBalance()); // Output: 1300


interface Shape {
  area(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// class Rectangle implements Shape {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   area(): number {
//     return this.width * this.height;
//   }
// }

const circle: Shape = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483

// const rectangle: Shape = new Rectangle(4, 5);
// console.log(rectangle.area()); // Output: 200


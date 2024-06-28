// OOPS (oject oriented programming)
// class Person {
//     private name: string;
//     private age: number;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
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
var circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483
// const rectangle: Shape = new Rectangle(4, 5);
// console.log(rectangle.area()); // Output: 200

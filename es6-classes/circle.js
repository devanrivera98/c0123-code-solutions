/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(area, circumference, radius) {
    super(area, circumference);
    this.radius = radius;
  }

  print() {
    console.log(`The radius of the Circle is ${this.radius}`);
  }
}

const newCircle = new Circle(0, 0, 15);
newCircle.print();

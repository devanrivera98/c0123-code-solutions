/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, radius * 2 * Math.PI);
    this.radius = radius;
  }

  print() {
    return `${super.print()}, radius: ${this.radius}`;
  }
}

const newCircle = new Circle(15);
console.log(newCircle.print());

/* exported Shape */
class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    console.log(`The area of the Shape is ${this.area} and the circumference of the Shape is ${this.circumference}`);
  }
}

const newShape = new Shape(10, 2);

newShape.print();

/* exported Shape */
class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    return `(${this.area},${this.circumference})`;
  }
}

const newShape = new Shape(10, 2);

console.log(newShape.print());

var student = {
  firstName: 'Devan',
  lastName: ' Rivera',
  age: 24
};

var fullName = student.firstName + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'billing';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log(student);

var vehicle = {
  make: 'Hyundai',
  model: 'Elantra',
  year: 2022
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle[isConvertible]:', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Bailey',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);

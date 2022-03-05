// alert('I am alert');

// let admin, name;
// name='John';
// admin=name;
// alert(admin)

// let checkName = "Ilya";

// alert(`hello${1}`)
// alert(`hello${"name"}`)
// alert(`hello${checkName}`)
// console.log('hi')

// const person = {
//     name : ['Bob', 'Smith'],
//     age : 32,
//     bio(){
//         console.log(`${person.name[0]} ${this.name[1]} is ${this.age} years old`)
//     },
//     introduceSelf(){
//         console.log(`Hi I am ${this.name[0]}`)
//     }
// }

// const myDataName = 'height';
// const myDataValue = '1.75m';
// person[myDataName] = myDataValue;

function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }

  const salva = new Person('Salva');

salva.introduceSelf();

 
const frankie = new Person('Frankie');

frankie.introduceSelf();
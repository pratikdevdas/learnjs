class Person {
  name;

  constructor(name) {
    this.name = name;
  }
  introduceSelf() {
    console.log(`Hi ai am ${this.name}`);
  }
}

const giles = new Person("Giles");
giles.introduceSelf();

class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grad

class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }
  introduceSelf() {
    console.log(`Hi am ${this.name} i am in ${this.#year}nd year`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}

const summers = new Student("Rev", 2);
summers.introduceSelf();
console.log(summers.canStudyArchery());

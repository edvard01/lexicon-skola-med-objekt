//School
let lexicon = {
  name: "lexicon",
  address: "Göteborgsgatan 44",
  zipcode: "432 12",
  city: "göteborg",
  students: [],
  teachers: [],
};

//Subjects
let matematik = {
  name: "Matematik",
  students: [],
  teacher: {},
  addTeacher: function addTeacher(teacher) {
    this.teacher = teacher;
    return;
  },
  addStudent: function addStudent(student) {
    this.students.push(student);
    return;
  },
};

let idrott = {
  name: "Idrott",
  students: [],
  teacher: {},
  addTeacher: function addTeacher(teacher) {
    this.teacher = teacher;
    return;
  },
  addStudent: function addStudent(student) {
    this.students.push(student);
    return;
  },
};

let svenska = {
  name: "Svenska",
  students: [],
  teacher: {},
  addTeacher: function addTeacher(teacher) {
    this.teacher = teacher;
    return;
  },
  addStudent: function addStudent(student) {
    this.students.push(student);
    return;
  },
};

//Students
let anna = {
  name: "Anna",
  age: 18,
  gender: "tjej",
  subjects: [],
  enlistToSubject: function enlistToSubject(subject) {
    this.subjects.push(subject);
    return;
  },
};

let stellan = {
  name: "Stellan",
  age: 18,
  gender: "kille",
  subjects: [],
  enlistToSubject: function enlistToSubject(subject) {
    this.subjects.push(subject);
    return;
  },
};

let stella = {
  name: "Stella",
  age: 19,
  gender: "tjej",
  subjects: [],
  enlistToSubject: function enlistToSubject(subject) {
    this.subjects.push(subject);
    return;
  },
};

let mattias = {
  name: "Mattias",
  age: 18,
  gender: "kille",
  subjects: [],
  enlistToSubject: function enlistToSubject(subject) {
    this.subjects.push(subject);
    return;
  },
};

let hugo = {
  name: "Hugo",
  age: 19,
  gender: "kille",
  subjects: [],
  enlistToSubject: function enlistToSubject(subject) {
    this.subjects.push(subject);
    return;
  },
};

//Teachers
let sara = {
  name: "Sara",
  subjects: [],
  addSubject: function (subject) {
    this.subjects.push(subject);
    return teacher;
  },
};

let bo = {
  name: "Bo",
  subjects: [],
  addSubject: function (subject) {
    this.subjects.push(subject);
    return;
  },
};

bo.subjects.push(matematik);
console.log(`${bo.name} är lärare i ämnet: ${bo.subjects[0].name}`);

//Det som är bra med objekt är ju att all data är samlad på samma ställe,
//ifall en admin vill ha information på en lärare vet de vilken syntax de ska använda för att nå datan.
//Det är även logiskt och alla lärare samt elever får likadan struktur.

stella.subjects.push(matematik);
console.log(`${stella.name} går i ${stella.subjects[0].name}`);

function addSubjectToTeacher(subject, teacher) {
  subject.teacher = teacher;
  teacher.subjects.push(subject);
  return teacher;
}

console.log(addSubjectToTeacher(idrott, sara));

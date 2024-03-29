//School
let lexicon = {
  name: "lexicon",
  address: "Göteborgsgatan 44",
  zipcode: "432 12",
  city: "göteborg",
  students: [],
  teachers: [],
  relegateStudent: function relegateStudent(student) {
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);

    student.subjects.forEach((element) => {
      element.removeStudent(student);
    });
  },
  fireTeacher: function fireTeacher(teacher) {
    let index = this.teachers.indexOf(teacher);
    this.teachers.splice(index, 1);

    teacher.subjects.forEach((element) => {
      console.log(`${teacher.name} ÄR LÄRARE FÖR ${element.name}`);
      element.removeTeacher();
    });
  },
  initStudent: function initStudent(students) {
    students.forEach((element) => {
      this.students.push(element);
    });
  },
  initTeacher: function initTeacher(teachers) {
    teachers.forEach((element) => {
      this.teachers.push(element);
    });
  },
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
  removeTeacher: function removeteacher() {
    this.teacher = {};
    return;
  },
  removeStudent: function removeStudent(student) {
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
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
  removeTeacher: function removeteacher() {
    this.teacher = {};
    return;
  },
  removeStudent: function removeStudent(student) {
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
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
  removeTeacher: function removeteacher() {
    this.teacher = {};
    return;
  },
  removeStudent: function removeStudent(student) {
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
  },
};

//Students
let anna = {
  name: "Anna",
  age: 18,
  gender: "tjej",
  subjects: [],
  enlistToSubject: function enlistToSubject(subject, student) {
    this.subjects.push(subject);
    subject.addStudent(student);
    return subject;
  },
  quitSubject: function quitSubject(subject) {
    for (let i = 0; i < this.subjects.length; i++) {
      if (this.subjects[i].name === subject.name) {
        this.subjects.splice(i, 1);
      }
    }

    for (let j = 0; j < subject.students.length; j++) {
      if (subject.students[j].name === this.name) {
        subject.students.splice(j, 1);
      }
    }
    return subject;
  },
};

let stellan = {
  name: "Stellan",
  age: 18,
  gender: "kille",
  subjects: [],
  enlistToSubject: function enlistToSubject(subject, student) {
    this.subjects.push(subject);
    subject.addStudent(student);
    return subject;
  },
  quitSubject: function quitSubject(subject) {
    for (let i = 0; i < this.subjects.length; i++) {
      if (this.subjects[i].name === subject.name) {
        this.subjects.splice(i, 1);
      }
    }

    for (let j = 0; j < subject.students.length; j++) {
      if (subject.students[j].name === this.name) {
        subject.students.splice(j, 1);
      }
    }
    return subject;
  },
};

let stella = {
  name: "Stella",
  age: 19,
  gender: "tjej",
  subjects: [],
  enlistToSubject: function enlistToSubject(subject, student) {
    this.subjects.push(subject);
    subject.addStudent(student);
    return subject;
  },
  quitSubject: function quitSubject(subject) {
    for (let i = 0; i < this.subjects.length; i++) {
      if (this.subjects[i].name === subject.name) {
        this.subjects.splice(i, 1);
      }
    }

    for (let j = 0; j < subject.students.length; j++) {
      if (subject.students[j].name === this.name) {
        subject.students.splice(j, 1);
      }
    }
    return subject;
  },
};

let mattias = {
  name: "Mattias",
  age: 18,
  gender: "kille",
  subjects: [],
  enlistToSubject: function enlistToSubject(subject, student) {
    this.subjects.push(subject);
    subject.addStudent(student);
    return subject;
  },
  quitSubject: function quitSubject(subject) {
    for (let i = 0; i < this.subjects.length; i++) {
      if (this.subjects[i].name === subject.name) {
        this.subjects.splice(i, 1);
      }
    }

    for (let j = 0; j < subject.students.length; j++) {
      if (subject.students[j].name === this.name) {
        subject.students.splice(j, 1);
      }
    }
    return subject;
  },
};

let hugo = {
  name: "Hugo",
  age: 19,
  gender: "kille",
  subjects: [],
  enlistToSubject: function enlistToSubject(subject, student) {
    this.subjects.push(subject);
    subject.addStudent(student);
    return subject;
  },
  quitSubject: function quitSubject(subject) {
    for (let i = 0; i < this.subjects.length; i++) {
      if (this.subjects[i].name === subject.name) {
        this.subjects.splice(i, 1);
      }
    }

    for (let j = 0; j < subject.students.length; j++) {
      if (subject.students[j].name === this.name) {
        subject.students.splice(j, 1);
      }
    }
    return subject;
  },
};

//grades

let betygMatematik = {
  subject: "Matematik",
  mvg: [],
  vg: [],
  g: [],
  ig: [],
};

let betygIdrott = {
  subject: "Idrott",
  mvg: [],
  vg: [],
  g: [],
  ig: [],
};

let betygSvenska = {
  subject: "Svenska",
  mvg: [],
  vg: [],
  g: [],
  ig: [],
};

//Teachers
let sara = {
  name: "Sara",
  subjects: [],
  addSubject: function (subject) {
    this.subjects.push(subject);
    subject.teacher = sara;
    return subject;
  },
  quitSubject: function quitSubject(subject) {
    for (let i = 0; i < this.subjects.length; i++) {
      if (this.subjects[i].name === subject.name) {
        this.subjects.splice(i, 1);
      }
    }
    subject.removeTeacher();
    return subject;
  },
};

let bo = {
  name: "Bo",
  subjects: [],
  addSubject: function (subject) {
    this.subjects.push(subject);
    subject.teacher = sara;
    return subject;
  },
  quitSubject: function quitSubject(subject) {
    for (let i = 0; i < this.subjects.length; i++) {
      if (this.subjects[i].name === subject.name) {
        this.subjects.splice(i, 1);
      }
    }
    subject.removeTeacher();
    return subject;
  },
};

// bo.subjects.push(matematik);
// console.log(`${bo.name} är lärare i ämnet: ${bo.subjects[0].name}`);

//Det som är bra med objekt är ju att all data är samlad på samma ställe,
//ifall en admin vill ha information på en lärare vet de vilken syntax de ska använda för att nå datan.
//Det är även logiskt och alla lärare samt elever får likadan struktur.

// stella.subjects.push(matematik);
// console.log(`${stella.name} går i ${stella.subjects[0].name}`);

// function addSubjectToTeacher(subject, teacher) {
//   subject.teacher = teacher;
//   teacher.subjects.push(subject);
//   return teacher;
// }

// console.log(addSubjectToTeacher(idrott, sara));

sara.addSubject(matematik);
sara.addSubject(idrott);
bo.addSubject(svenska);

anna.enlistToSubject(matematik, anna);
stellan.enlistToSubject(svenska, stellan);
stella.enlistToSubject(idrott, stella);
mattias.enlistToSubject(matematik, mattias);
mattias.enlistToSubject(svenska, mattias);
mattias.enlistToSubject(idrott, mattias);

lexicon.initStudent([anna, stellan, stella, mattias, hugo]);
lexicon.initTeacher([sara, bo]);

function displayAllStudents(school) {
  for (key in school.students) {
    console.log(school.students[key]);
  }
  return school;
}

function displayAllSubjectsOfStudent(student) {
  if (!student.subjects.length) {
    return "Student isn't signed up for any subjects.";
  }
  for (key in student.subjects) {
    console.log(student.subjects[key]);
  }

  return student;
}

function displayAllStudentsEnlistedToSubject(subject) {
  if (!subject.students.length) {
    return "No students are signed up to this subject.";
  }
  for (key in subject.students) {
    console.log(subject.students[key]);
  }
  return subject;
}

function displayAllTeachers(school) {
  for (key in school.teachers) {
    console.log(school.teachers[key]);
  }
  return school;
}

console.log("----All Students----");
console.log(displayAllStudents(lexicon));

console.log("displayAllSubjectsOfStudent");
console.log(displayAllSubjectsOfStudent(mattias));

console.log("displayAllStudentsEnlistedToSubject");
console.log(displayAllStudentsEnlistedToSubject(matematik));

console.log("displayAllTeachers");
console.log(displayAllTeachers(lexicon));

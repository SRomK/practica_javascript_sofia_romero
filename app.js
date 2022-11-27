/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 21,
  examScores: [],
  gender: 'male',
  name: 'Alonso'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
},
{
  age: 25,
  examScores: [],
  gender: 'female',
  name: 'cristina'
}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'sofia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];


//1. Mostrar en formato de tabla todos los alumnos

const allStudents = [...students,...availableMaleNames,...availableFemaleNames];

const allStudentsName = allStudents.map((student) => {
  if (student.name) return student.name;
  return student;
})

console.table(allStudentsName);

//2. Mostrar cantidad de alumnos

console.log(allStudentsName.length)

//3. Mostrar por consola todos los nombres de los alumnos.   

allStudentsName.forEach((student) => {
console.log(student)
})

//4. Eliminar el último alumno de la clase.

const lastStudent = allStudents.filter((student, index) => index !== allStudents.length-1)

console.log({lastStudent});


//5. Eliminar un alumno aleatoriamente de la clase.  

const randomNum = Math.floor(Math.random() * allStudents.length);
console.log(randomNum);

const randStudentDel = allStudents.filter((student, index) => index !== randomNum)
console.log({randStudentDel});

// 6. Mostrar por consola todos los datos de los alumnos que son chicas. 

students.forEach((student) => {
if (student.gender == "female") {
  console.log(student)
}
});

// 7. Mostrar por consola el número de chicos y chicas que hay en la clase.

let countGirls = 0;
let countBoys = 0;

students.forEach((student) => {

if (student.gender == "female") {
  countGirls ++
}
else {
  countBoys ++  
}
});

console.log({countGirls, countBoys});

// 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas. 

const areAllStudMale = !allStudents.some((student) => student.gender === "male");

console.log({areAllStudMale});

// 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años. 

students.forEach((student) => {

if (student.age > 19 && student.age < 26) {
  console.log(student.name)
}
});


// 10- Añadir un alumno nuevo con los siguientes datos: 
// nombre aleatorio
// edad aleatoria entre 20 y 50 años
// género aleatorio
// listado de calificaciones vacío
// ¡OJO!, el nombre y el género tienen que ir acordes. 

const generateRandomNumber = (min , max) =>Math.floor(Math.random() * (max - min + 1) + min)

const randomStudent = {
name: allStudentsName[generateRandomNumber(0,allStudentsName.length -1 )],
age: generateRandomNumber(20, 25),
gender:availableGenders[generateRandomNumber(0,1)],
score: [],  
}
console.log({randomStudent})

// 11- Mostrar por consola el nombre de la persona más joven de la clase. ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida. 
let min = 99; 
let minAgeStudent = null
students.forEach((student) => {
if (student.age < min) {
  min = student.age
  minAgeStudent = student
}
});

console.log(minAgeStudent.name)

// 12- Mostrar por consola la edad media de todos los alumnos de la clase. 

let counter = 0

students.forEach((student) => {
counter += student.age
});

const edadMedia = Math.floor(counter/students.length);

console.log(edadMedia);

// // 13- Mostrar por consola la edad media de las chicas de la clase. 
let sumAgesGr = 0;
let onlyGirls = 0;

students.forEach((student) => {
if(student.gender == "female") {
  sumAgesGr += student.age
  onlyGirls += 1
}
});
const edadMediaGr = Math.floor(sumAgesGr/onlyGirls);

console.log(edadMediaGr);
// 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas. 
let randomNote = 0;

students.forEach((student) => {
randomNote = Math.floor(Math.random() * 11);
student.examScores.push(randomNote);
});

console.log(students);

// 15- Ordenar el array de alumnos alfabéticamente según su nombre. 

students.sort((a, b) => {
  let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

  if (fa < fb) {
      return -1;
  }
  if (fa > fb) {
      return 1;
  }
  return 0;
});

console.log(students);
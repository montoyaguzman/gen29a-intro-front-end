let students = ['cesar', 'montoya'];
// let student = { name: 'jose' };
let students2 = [...students]; // spread operator
// let student2 = student; // paso por referencia
// let student2 = { ...student };
// student2.name = 'cesar'

// const, asignacion, reasignacion y mutabilidad

students2.push('juanito');

console.log('s1', students) // 2
console.log('s2', students2) // 3
/**
  Valor primitivos => paso por valor
    int, booleanos, string
**/
let name = 'jose';
let name2 = name; // paso por valor
console.log('n2', name2) // jose
name2 = 'carlos'

console.log('n1', name) // jose
console.log('n2', name2) // carlos


/**
  Valores complejos => paso por referencia
     array, objetos
**/

let students = ['cesar', 'montoya'];
let students2 = students; // paso referencia

// const, asignacion, reasignacion y mutabilidad

students2.push('juanito');

console.log('s1', students) // 2
console.log('s2', students2) // 3

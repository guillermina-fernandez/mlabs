const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    }
];

// Función MAP:
const names = characters.map(item => item.name);
const heights = characters.map(item => item.height);
const nameHeight = characters.map(character => [{ nombre: character.name, altura: character.height }]);

console.log('Todos los nombres: ', names, '\n');
console.log('Todas las alturas: ', heights, '\n');
console.log('Nombres y alturas: ', nameHeight, '\n');


//Función REDUCE:
const noMass = 'La masa de los siguientes personajes no era un número y por lo tanto no se adicionó:\n';
const noMassCount = 0;
const totalMass = characters.reduce((acc, character) => {
    if (!Number.isNaN(Number(character.mass))) {
        return acc + parseFloat(character.mass);
    };
    noMass += `${character.name} - Masa: ${character.mass}\n`;
    noMass.count += 1;
    return acc;
}, 0);

const totalHeight = characters.reduce((acc, character) => {
    return acc + parseFloat(character.height);
}, 0);

const totalChars = characters.reduce((acc, character) => {
    return acc + character.name.replace(' ', '').length;
}, 0);

const totalCharsByEyes = characters.reduce((acc, character) => {
    const eyeColor = character.eye_color;

    if (!acc[eyeColor]) {
        acc[eyeColor] = 0;
    }

    acc[eyeColor] += 1;

    return acc;
}, {});

console.log('Masa total de todos los caracteres: ', totalMass, '\n');
noMassCount > 0 && console.log(noMass);
console.log('Altura total de todos los caracteres: ', totalHeight, '\n');
console.log('Total de caracteres de todos los nombres (y apellidos) de los personajes: ', totalChars, '\n');
console.log('Número de caracteres por color de ojos: ', totalCharsByEyes, '\n');


//Función FILTER:
const massOver = characters.filter(character => character.mass > 100);
const heightLess = characters.filter(character => character.height < 200);
const males = characters.filter(character => character.gender == 'male');
const females = characters.filter(character => character.gender == 'female');
// Agrego map para facilitar lectura del output
console.log('Personajes con masa superior a 100: ', massOver.map(char => char.name), '\n');
console.log('Personajes con altura menor a 200: ', heightLess.map(char => char.name), '\n');
console.log('Personajes masculinos: ', males.map(char => char.name), '\n');
console.log('Personajes femeninos: ', females.map(char => char.name), '\n');


// Función SORT:
const sortName = [...characters].sort((a, b) => a.name.localeCompare(b.name));
const sortMass = [...characters].sort((a, b) => a.mass.localeCompare(b.mass));
const sortHeight = [...characters].sort((a, b) => a.height.localeCompare(b.height));
const sortGender = [...characters].sort((a, b) => a.gender.localeCompare(b.gender));
// Agrego map para facilitar lectura del output
console.log('Ordenados por nombre: ', sortName.map(char => char.name), '\n');
console.log('Ordenados por masa: ', sortMass.map(char => char.name), '\n');
console.log('Ordenados por altura: ', sortHeight.map(char => char.name), '\n');
console.log('Ordenados por género: ', sortGender.map(char => char.name), '\n');


// Función EVERY:
const blueEyes = characters.every(character => character.eye_color == 'blue');
const massOver40 = characters.every(character => character.mass > 40);
const heightLess200 = characters.every(character => character.height < 200);
const allMale = characters.every(character => character.gender == 'male');

!blueEyes ? console.log('No todos tienen ojos azules.') : console.log('Todos tienen ojos azules');
!massOver40 ? console.log('No todos tiene masa superior a 40') : console.log('Todos tienen masa superior a 40');
!heightLess200 ? console.log('No todos son más bajos que 200') : console.log('Todos son más bajos que 200');
!allMale ? console.log('No todos son hombres', '\n') : console.log('Todos son hombres', '\n');


// Función SOME:
const oneMale = characters.some(char => char.gender == 'male');
const oneBlue = characters.some(char => char.eye_color == 'blue');
const oneHeight = characters.some(char => char.height > 200);
const oneMass = characters.some(char => char.mass < 50);

oneMale ? console.log('Hay al menos un personaje masculino') : console.log('No hay ningún personaje masculino');
oneBlue ? console.log('Hay al menos un personaje con ojos azules') : console.log('No hay ningún personaje con ojos azules');
oneHeight ? console.log('Hay al menos un personaje más alto que 200') : console.log('No hay ningún personaje más alto que 200');
oneMass ? console.log('Hay al menos un personaje con masa inferior a 50', '\n') : console.log('No hay ningún personaje con masa inferior a 50', '\n');


const users = [
    { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
    { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
    { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
    { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
    { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
    { firstName: "Wes", lastName: "Reid", role: "Instructor" },
    { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

const nameMap = users.map(user => (
    {
        [`${user.firstName}-${user.lastName}`]: user.role
    }
));
console.log('Mapa de nombre-apellido: rol: ', nameMap, '\n');

const roleFilter = nameMap.filter(user => Object.values(user)[0] == 'Full Stack Resident');
console.log('Filtro de solo "Full Stack Resident" (sobre el mapa anterior): ', roleFilter, '\n');

const roleFilterOrig = users.filter(user => user.role == 'Full Stack Resident');
console.log('Filtro de solo "Full Stack Resident" (sobre el mapa original): ', roleFilterOrig, '\n');

const groupRoles = users.reduce((acc, user) => {
    const role = user.role;

    if (!acc[role]) {
        acc[role] = [];
    }

    acc[role].push(user);

    return acc;
}, {});
console.log('Agrupados por rol: ', groupRoles, '\n');


function findUserByName(userName) {
    const filteredUsers = users.filter(user => user.firstName == userName);
    return filteredUsers;
};
console.log('Función de búsqueda de usuario por nombre (ej: Chloe): ', findUserByName('Chloe'));
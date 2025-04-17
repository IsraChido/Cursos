const {getUUID, getAge} = require('./plugins');

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const {getUserById} = require('./js-foundation/03-callback');
// const {getUserById} = require('./js-foundation/04-arrow');

const getPokemonById = require('./js-foundation/06-promises')

getPokemonById(4)
    .then((pokemon) => console.log({pokemon}))
    .catch((err) => console.log('Por favor intente de nuevo'))
    .finally(() => console.log('Finalmente'));

// token de acceso
// Públicas

// ! Referencia a la función factory y uso
/*const {buildMakePerson} = require('./js-foundation/05-factory');

const makePerson = buildMakePerson({getUUID,getAge })

const obj = {name: 'John', birthdate: '2002-11-27'};

const john = makePerson(obj);

console.log({john});*/

// console.log(emailTemplate);

/*
const id = 3;

getUserById(id, (err, user) => {
    if (err) throw new Error(err);

    getUserById(2 , (err, user2) => {
        if (err) throw new Error(err);

        console.log({user, user2});
    })
});*/

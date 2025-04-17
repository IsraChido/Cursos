/*const {getUUID} = require('../plugins/get-id.plugin');
const {getAge} = require('../plugins/get-age.plugin');*/
// const {getUUID, getAge} = require('../plugins');

const buildMakePerson = ({getUUID, getAge}) => {
    return buildPerson = ({name, birthdate}) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}

/*
const obj = {name: 'John', birthdate: '2002-11-27'};

const john = buildPerson(obj);

console.log(john);*/

module.exports = {
    buildMakePerson,
}

/*const {getUUID} = require('../plugins/get-id.plugin');
const {getAge} = require('../plugins/get-age.plugin');*/
// const {getUUID, getAge} = require('../plugins');

interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({getUUID, getAge}: BuildMakePersonOptions) => {
    return ({name, birthdate}: PersonOptions) => {
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


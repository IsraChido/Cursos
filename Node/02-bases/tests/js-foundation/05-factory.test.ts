import {buildMakePerson} from "../../src/js-foundation/05-factory";


describe('js-foundation/05-factory.ts', () => {
    const getUUID = () => '123456';
    const getAge = () => 20;

    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({getUUID, getAge});

        expect(typeof makePerson).toBe('function');
    })

    test('makePerson should return a person', () => {
        const makePerson = buildMakePerson({getUUID, getAge});
        const johnDoe = makePerson({name: 'John Doe', birthdate: '2002-11-27'});

        expect(johnDoe).toEqual({
            id: '123456',
            name: 'John Doe',
            birthdate: '2002-11-27',
            age: 20,
        });
    })
})
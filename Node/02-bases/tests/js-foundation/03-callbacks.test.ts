import {getUserById} from "../../src/js-foundation/03-callback";

describe("js-foundation/03-callback", () => {
    test("getUserById should return an error if user does not exist", (done) => {
        const id = 10;

        getUserById(id, (err, user) => {
            expect(err).toBe('USUARIO no encontrado: ' + id);
            expect(user).toBeUndefined();

            done();
        });
    });

    test("getUserById should return a user if user exists", (done) => {
        const id = 1;

        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toBeDefined();

            expect(user).toEqual({id: 1, name: 'John Doe'});

            done();
        })
    })
});
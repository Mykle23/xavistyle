import { Users } from '../../../src/users/users.js';

it('dommy test', () => {
    expect(true).toBeTruthy();
})

describe('Testing the methods of users', () => {
    const default_user = {
        id: 341341,
        first_name: 'Fernado A.',
        name: 'Fernando'
    };

    it('describe methods should describe properly', () => {
        const expected = `Hola ${default_user.first_name} tu usuario ha sido creado.`;
        const result = Users.describe(default_user);

        expect(result).toEqual(expected);
    });
});
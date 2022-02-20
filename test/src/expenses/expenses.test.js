import { Expenses } from '../../../src/expenses/expenses.js'

describe('Test about the methods', () => {
    it('Verify the return of add', () => {
        const defaultExp = {
            money: 0,
            concept: '',
            date: 2
        };
        const defaultUser = 25;
        const expected = `${defaultExp.date} ${defaultExp.money} "${defaultExp.concept}"`

        const result = Expenses.add(defaultUser, defaultExp);

        expect(result).toEqual(expected);
    });
});

test('dummy',() => {
    expect(true).toBeTruthy();
})
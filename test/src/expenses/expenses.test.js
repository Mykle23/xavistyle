test('djfahks',() => {
    expect(true).toBe(true);
})
import { Expenses } from '../../../src/expenses/expenses.js'
import 'dotenv/config';
process.env.DATA_FILE_EXPENSES = "./test/data/ledger.json";
const fs = require('fs');

const path = process.env.DATA_FILE_EXPENSES;

try {
  fs.unlinkSync(path)
  //file removed
} catch(err) {
  console.log(err)
}

describe('Test about the methods', () => {
    it('Verify the return of add', () => {
        const defaultExp = {
            money: 0,
            concept: '',
            date: 2
        };
        const defaultUser = 25;
        const expected = `El ${defaultExp.date}, cantidad: ${defaultExp.money} "${defaultExp.concept}"`

        const result = Expenses.add(defaultUser, defaultExp);

        expect(result).toEqual(expected);
    });

    it('should return all Expenses of the given user', () => {
        const defaultExp = {
            money: 23,
            concept: 'naves',
            date: '07/04/1997'
        };
        const defaultExp2 = {
            money: 32,
            concept: 'manzanas',
            date: '28/10/1998'
        };
        const default_user = {
            id: 341341,
            first_name: 'Fernado A.',
            name: 'Fernando'
        };
        const expectedResult = `El 07/04/1997, cantidad: 23 "naves"
El 28/10/1998, cantidad: 32 "manzanas"`;

        Expenses.add(default_user.id,defaultExp);
        Expenses.add(default_user.id,defaultExp2);

        const result = Expenses.show(default_user.id);

        expect(result).toEqual(expectedResult);
    });

    it('Expensens must know who to describe', () => {
            const defaultExp = {
            money: 23,
            concept: 'naves',
            date: '07/04/1997'
        };
        const defaultExp2 = {
            money: 32,
            concept: 'manzanas',
            date: '28/10/1998'
        };

        const expectedResult = `El 07/04/1997, cantidad: 23 "naves"
El 28/10/1998, cantidad: 32 "manzanas"`;

        const intake = [defaultExp, defaultExp2];
        const result = Expenses.describe(intake);

        expect(result).toEqual(expectedResult);
    });
});
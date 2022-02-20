import { Expense } from '../../../src/expenses/expense.js';

describe('test of the constructor of Expense', () => {
     const exp = {
            money: 0,
            concept: '',
            date: 2
        };
    it('should be 3 properties money, concept and date', () => {      
        const defaultExp = new Expense(exp);

        expect(defaultExp.money).toBeDefined();
        expect(defaultExp.concept).toBeDefined();
        expect(defaultExp.date).toBeDefined();
    });

    it('if date is undefined must be "today"',() => {
        exp.date = undefined;
        const defaultExp = new Expense(exp);
        const expected = Date(Date.now());

        console.log(defaultExp.date);
        expect(defaultExp.date).toEqual(expected);
    });
});

describe('test about the methods', () => {
    it('description methods should return the description of the expense', () => {
        const exp = {
            money: 0,
            concept: '',
            date: 2
        };
        const expected = `${exp.date} ${exp.money} "${exp.concept}"`;
        const defaultExp = new Expense(exp);

        expect(defaultExp.description()).toEqual(expected);
    });
});
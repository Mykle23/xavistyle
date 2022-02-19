import { Expense } from '../src/expenses/expense';

const default_date = undefined;

const default_expense = {
    money: 30,
    concept: 'penes',
    date: default_date
};

describe('Expenses', () =>{
    it('The constructor should define money, concept and date', () =>{
        const exp = new Expense(default_expense);
        expect(exp.money).toBeDefined();
        expect(exp.concept).toBeDefined();
        expect(exp.date).toBeDefined();
    })

    it('If date is undefined must be today', () =>{
        const exp = new Expense(default_expense);
        expect(exp.date).toEqual('today');
    })

    it('description must describe expense', () =>{
        const exp = new Expense(default_expense);
        expect(exp.description()).toEqual(`${exp.date} ${exp.money} "${exp.concept}"`)
    })
})
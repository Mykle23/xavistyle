import { Ledger } from '../../../src/expenses/ledger.js';
import { Expense } from '../../../src/expenses/expense.js';
// import { fs } from 'fs';
import { fs } from '../../../__mocks__/fs.js';
// jest.mock('fs');

describe('ledger works as a ledger ', () => {
    const exp = {
        money: 0,
        concept: '',
        date: 2
    };
    const exp2 = {
        money: 0,
        concept: '',
        date: 3
    }
    // it('should add an user and expense to the collection',() => {
    //     Ledger.collection={};
    //     const usertoAdd = 'fer_id';
    //     const expenseToAdd = new Expense(exp);
    //     const initial_collection = JSON.stringify(Ledger.collection);
    //     Ledger.add(usertoAdd, expenseToAdd);
    //     expect(JSON.stringify(Ledger.collection)).not.toStrictEqual(initial_collection);
    //     expect(Ledger.collection[usertoAdd]).toStrictEqual([expenseToAdd]);
    // });

    // it('when add an expense to a user must be add only to that user expenses',() => {
    //     Ledger.collection={};

    //     const usertoAdd = 'fer_id';
    //     const expenseToAdd = new Expense(exp);
    //     const anotherUser = 'nacho_id';
    //     const anotherExpense = new Expense(exp2);

    //     Ledger.add(usertoAdd, expenseToAdd);

    //     Ledger.add(anotherUser, anotherExpense);
    //     expect(Ledger.collection[usertoAdd]).toStrictEqual([expenseToAdd]);
    //     expect(Ledger.collection[anotherUser]).not.toStrictEqual([expenseToAdd]);
    // });

    // it('persintace of ledger',() => {
    //     const expected = true;
    //     const result = Ledger.save();

    //     expect(result).toBe(expected);
    // });

    // it('persintace of ledger fail result must false', () => {

    //     const expected = false;
    //     const result = Ledger.save();
    //     // console.log(fs.miFuncion);
    //     // const result = fs.miFuncion();
    //     try {
    //         const dir =  fs.opendir('./');

    //         expect(dir).toBeTruthy();
    //     } catch (err) {
    //         console.log(err);
    //     }

    //     // expect(fs.miFuncion).toBeDefined();
    //     expect(result).toBe(expected);
    // });
});
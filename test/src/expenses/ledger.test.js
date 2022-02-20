test('djfahks',() => {
    expect(true).toBe(true);
})
import { Ledger } from '../../../src/expenses/ledger.js';

jest.mock('fs');

process.env.DATA_FILE_EXPENSES = "./test/src/expenses/expensesData";

beforeEach(() => {
    initializeLedger();
});

function initializeLedger() {
    Ledger.collection = {};
};

describe('ledger works as a ledger ', () => {
    it('should add an user and expense to the collection', () => {
        const usertoAdd = 'fer_id';
        const expenseToAdd = {};
        const initial_collection = JSON.stringify(Ledger.collection);
        Ledger.add(usertoAdd, expenseToAdd);
        expect(JSON.stringify(Ledger.collection)).not.toStrictEqual(initial_collection);
        expect(Ledger.collection[usertoAdd]).toStrictEqual([expenseToAdd]);
    });

    it('when add an expense to a user must be add only to that user expenses', () => {
        const usertoAdd = 'fer_id';
        const expenseToAdd = {};
        const anotherUser = 'nacho_id';
        const anotherExpense = { another: 'different object' };

        Ledger.add(usertoAdd, expenseToAdd);

        Ledger.add(anotherUser, anotherExpense);
        expect(Ledger.collection[usertoAdd]).toStrictEqual([expenseToAdd]);
        expect(Ledger.collection[anotherUser]).not.toStrictEqual([expenseToAdd]);
    });

    it('persintace of ledger', () => {
        let result = false;
        const expected = true;
        Ledger.collection = {};

        result = Ledger.save();

        expect(result).toBe(expected);
    });

    it('persintace of ledger fails if no writes', () => {
        let result = true;
        const expected = false;

        result = Ledger.save();

        expect(result).toBe(expected);
    });

    it('should be able to add and save in the same method', () => {
        const usertoAdd = 'fer_id';
        const expenseToAdd = {};
        const initial_collection = JSON.stringify(Ledger.collection);

        const spy = jest.spyOn(Ledger, 'save');

        Ledger.addAndSave(usertoAdd, expenseToAdd);
        expect(JSON.stringify(Ledger.collection)).not.toStrictEqual(initial_collection);
        expect(Ledger.collection[usertoAdd]).toStrictEqual([expenseToAdd]);
        expect(spy).toHaveBeenCalled();

    });

    //comprobar si la informaccion persistida es lo que recibo p
    //comrobar que ledeger almacene una colleccion igual que la persistida
    it('load of ledger', () => {
        const expected = { fer_id: [{}] };
        Ledger.load();
        const result = Ledger.collection;
        expect(result).toStrictEqual(expected);
    });

    it('load of ledger return false when fs error on read', () => {
        const result = Ledger.load();
        expect(result).toBeFalsy();
    });

    it('When getById is call must return an array of expenses', () => {
        const exp1 = {
            money: 23,
            concept: 'naves',
            date: '07/04/1997'
        };
        const exp2 = {
            money: 32,
            concept: 'manzanas',
            date: '28/10/1998'
        };
        const default_user = {
            id: 341341,
            first_name: 'Fernado A.',
            name: 'Fernando'
        };
        const expectedResult = [exp1, exp2];
        Ledger.add(default_user.id,exp1);
        Ledger.add(default_user.id,exp2);
        const result = Ledger.getById(default_user.id);

        expect(result).toEqual(expectedResult);
    });
});
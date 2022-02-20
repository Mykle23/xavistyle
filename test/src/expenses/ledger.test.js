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
<<<<<<< HEAD
    it('load of ledger',() => {
        const expected = { fer_id: [ {} ] };
=======

    //comprobar si la informaccion persistida es lo que recibo p
    //comrobar que ledeger almacene una colleccion igual que la persistida
    it('load of ledger', () => {
        const expected = { fer_id: [{}] };
>>>>>>> e97d6e8411be6d5b747584e981055b04cf4b315d
        Ledger.load();
        const result = Ledger.collection;
        expect(result).toStrictEqual(expected);
    });
<<<<<<< HEAD
    it('load of ledger if error returns false',() => {
        let result = Ledger.load();
        expect(result).toBeFalsy();
=======

    it('load of ledger', () => {
        const expected = { fer_id: [{}] };
        Ledger.load();
        const result = Ledger.collection;
        expect(result).toStrictEqual(expected);
>>>>>>> e97d6e8411be6d5b747584e981055b04cf4b315d
    });
});
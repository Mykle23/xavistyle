import { Ledger } from '../../../src/expenses/ledger.js';


jest.mock('fs');
process.env.DATA_FILE_EXPENESES = "./test/src/expenses/expensesData";



beforeEach(() => {
    initializeLedger();
  });

function initializeLedger(){
    Ledger.collection={};
  };

describe('ledger works as a ledger ', () => {
    it('should add an user and expense to the collection',() => {
        const usertoAdd = 'fer_id';
        const expenseToAdd = {};
        const initial_collection = JSON.stringify(Ledger.collection);
        Ledger.add(usertoAdd, expenseToAdd);
        expect(JSON.stringify(Ledger.collection)).not.toStrictEqual(initial_collection);
        expect(Ledger.collection[usertoAdd]).toStrictEqual([expenseToAdd]);
    });

    it('when add an expense to a user must be add only to that user expenses',() => {
        const usertoAdd = 'fer_id';
        const expenseToAdd = {};
        const anotherUser = 'nacho_id';
        const anotherExpense = {another:'different object'};

        Ledger.add(usertoAdd, expenseToAdd);

        Ledger.add(anotherUser, anotherExpense);
        expect(Ledger.collection[usertoAdd]).toStrictEqual([expenseToAdd]);
        expect(Ledger.collection[anotherUser]).not.toStrictEqual([expenseToAdd]);
    });

    it('persintace of ledger',() => {
        let result = false;
        const expected = true;
        Ledger.collection={};
        const usertoAdd = 'fer_id';
        const expenseToAdd = {};
        Ledger.add(usertoAdd, expenseToAdd);

        result = Ledger.save();
          

        expect(result).toBe(expected);
    });
    it('persintace of ledger fails if no writes',() => {
        let result = true;
        const expected = false;
        Ledger.collection={};
        const usertoAdd = 'fer_id';
        const expenseToAdd = {};
        Ledger.add(usertoAdd, expenseToAdd);

        result = Ledger.save();
          

        expect(result).toBe(expected);
    });
    it('should be able to add and save in the same method',() => {
        const usertoAdd = 'fer_id';
        const expenseToAdd = {};
        const initial_collection = JSON.stringify(Ledger.collection);
       
        const spy = jest.spyOn(Ledger, 'save');

        Ledger.addAndSave(usertoAdd, expenseToAdd);
        expect(JSON.stringify(Ledger.collection)).not.toStrictEqual(initial_collection);
        expect(Ledger.collection[usertoAdd]).toStrictEqual([expenseToAdd]);
        expect(spy).toHaveBeenCalled();

    });
    it('load of ledger',() => {
        const expected = { fer_id: [ {} ] };
        Ledger.load();
        const result = Ledger.collection;
        expect(result).toStrictEqual(expected);
    });
    it('load of ledger if error returns false',() => {
        let result = Ledger.load();
        expect(result).toBeFalsy();
    });
});
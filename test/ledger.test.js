import { Ledger } from '../src/expenses/ledger.js';



describe('ledger works as a ledger ',() => {
    it('should add an user and expense to the collection',() => {
        Ledger.collection={};
        const usertoAdd = 'fer_id';
        const expenseToAdd = '03_id';
        const initial_collection = JSON.stringify(Ledger.collection);
        Ledger.add(usertoAdd, expenseToAdd);
        expect(JSON.stringify(Ledger.collection)).not.toStrictEqual(initial_collection);
        expect(Ledger.collection[usertoAdd]).toStrictEqual([expenseToAdd]);
    });
    
    it('when add an expense to a user must be add only to that user expenses',() => {
        Ledger.collection={};

        const usertoAdd = 'fer_id';
        const expenseToAdd = '03_id';
        const anotherUser = 'nacho_id';
        const anotherExpense = '04_id';

        Ledger.add(usertoAdd, expenseToAdd);
      
        Ledger.add(anotherUser, anotherExpense);
        expect(Ledger.collection[usertoAdd]).toStrictEqual([expenseToAdd]);
        expect(Ledger.collection[anotherUser]).not.toStrictEqual([expenseToAdd]);
    })
})
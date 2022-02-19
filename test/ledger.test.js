import { Ledger } from '../src/expenses/ledger.js';
class User{
    constructor(args){
        Object.assign(this,args);
    }
}

class Expense{
    constructor(args){
        Object.assign(this,args);
    }
}

describe('ledger works as a ledger ',() => {
    it('should add an user and expense to the collection',() => {
        const usertoAdd = new User({username:'fer'});
        const expenseToAdd = new Expense({value:3});
        const initial_collection = JSON.stringify(Ledger.collection);
        Ledger.add(usertoAdd, expenseToAdd);
        expect(JSON.stringify(Ledger.collection)).not.toStrictEqual(initial_collection);
        expect(Ledger.collection[usertoAdd]).toStrictEqual([expenseToAdd]);
    })
})
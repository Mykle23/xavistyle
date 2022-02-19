import {Expense} from './expense'
import {Ledger} from './ledger'

class Expenses{

    static add(user,expense){
        const theExpense = new Expense(expense)
        if(Ledger.add(user,theExpense) === false) {
            return false;
        };
        return theExpense.description()
    }
}

export {Expenses}
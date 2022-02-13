import {Expense} from './expense'
import {Ledger} from './ledger'

class Expenses{

    static add(user,expense){
        const theExpense = new Expense(expense)
        Ledger.add(user,theExpense)
        return theExpense.description()
    }
}

export {Expenses}
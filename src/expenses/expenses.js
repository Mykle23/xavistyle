import {Expense} from './expense'
import {Ledger} from './ledger'

class Expenses{

    static add(user,expense) {
        const theExpense = new Expense(expense);
        if(!Ledger.addAndSave(user,theExpense)) {
            return 'error al grabar, hay un problema llama a los monos.'
        };

        return theExpense.description();
    }
}

export {Expenses}
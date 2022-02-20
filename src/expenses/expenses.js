import {Expense} from './expense'
import {Ledger} from './ledger'

class Expenses{

    static add(user_id,expense) {
        Ledger.load();
        const theExpense = new Expense(expense);
        if(!Ledger.addAndSave(user_id,theExpense)) {
            return 'error al grabar, hay un problema llama a los monos.'
        };
        return theExpense.description();
    }

    static show(user_id) {
        Ledger.load();
        const theExpenses = Ledger.getById(user_id);
        const result = Expenses.describe(theExpenses);

        return result;
    }

    static describe(expensesArray) {
        let result = '';
        let theExpense = undefined;
        expensesArray.forEach(expense => {
            theExpense = new Expense(expense);
            result += theExpense.description() + '\n';
        });
        result = result.slice(0, -1);
        return result;
    }
}

export {Expenses}
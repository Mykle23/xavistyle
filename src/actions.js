import { Messages } from './infrastructure/messages.js'
import { Parser } from './helpers/parser.js'
import { Expenses } from './expenses/expenses.js'
import { Users } from './users/users.js'

class Actions {
    static getHelp() {
        return Messages.retrieve('help')
    }

    static getIntroduction() {
        return Messages.retrieve('intro')
    }

    static addExpense(user, message) {

        const theExpense = {
            money: Parser.extractMoney(message),
            concept: Parser.extractConcept(message),
            date: Parser.extractDate(message)
        };

        Users.ensure(user)
        const expense = Expenses.add(user, theExpense);
        //cambiar esto para la gestion de errores
        if (expense === false) { return Messages.retrieve('err.ledger') };
        const answer = Messages.retrieve('expense.added');
        const result = `${answer}: ${expense}`;

        return result;
    }

    static newUser(user_ctx, message) {

        const theUser = {
            id: Parser.extractId(user_ctx),
            first_name: Parser.extractFristName(user_ctx),
            name: Parser.extractName(user_ctx)
        };

        Users.ensure(theUser.id);
        const user = Users.describe(theUser);
        const answer = Messages.retrieve('user.new_user');
        const result = `${answer}: ${user}`;

        return result;
    }
}


export { Actions }
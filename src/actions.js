import {Messages} from './infrastructure/messages.js'
import {Parser} from './helpers/parser.js'
import {Expenses} from './expenses/expenses.js'
import { Users } from './users/users.js'

class Actions{
    static getHelp(){
        return Messages.retrieve('help')
    }

    static getIntroduction(){
        return Messages.retrieve('intro')
    }

    static addExpense(user,message){

        const theExpense = {
            money: Parser.extractMoney(message),
            concept: Parser.extractConcept(message),
            date: Parser.extractDate(message)  
        }
        
        Users.ensure(user)
        const expense = Expenses.add(user,theExpense)
        const answer = Messages.retrieve('expense.added')
        const result =  `${answer}: ${expense}` 
        
        return result
    }
}

export {Actions}


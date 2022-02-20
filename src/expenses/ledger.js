import * as fs from 'fs';
import 'dotenv/config';

class Ledger{
    static collection = {}

    static add(user_id, expense){
        if(!this.collection[user_id])this.collection[user_id]=[];
        let bag = this.collection[user_id]
        bag.push(expense)
    }

    static save() {
        try {
            fs.writeFileSync(process.env.DATA_FILE_EXPENSES, JSON.stringify(this.collection));
            return true;
        } catch (err) {
            return false;
        }
    }

    static addAndSave(usertoAdd, expenseToAdd){
        Ledger.add(usertoAdd, expenseToAdd);
        Ledger.save();
    }
<<<<<<< HEAD
    static load() {
        let result = '';
        try {
            result = fs.readFileSync(process.env.DATA_FILE_EXPENES);
            console.log(result);
            this.collection=result;
            return true;
        } catch (err) {
            return false;
        }


    }


=======

    static load() {
        try {
            this.collection = fs.readFileSync(process.env.DATA_FILE_EXPENSES);
            return true;
        } catch (err) {
            console.log(`error de lectura`);
            return false;
        }
    }
>>>>>>> e97d6e8411be6d5b747584e981055b04cf4b315d
}

export {Ledger}
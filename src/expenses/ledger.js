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
            fs.writeFileSync(process.env.DATA_FILE_EXPENESES, JSON.stringify(this.collection));
            return true;
        } catch (err) {
            return false;
        }
    }
    static addAndSave(usertoAdd, expenseToAdd){
        Ledger.add(usertoAdd, expenseToAdd);
        Ledger.save();
    }
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


}

export {Ledger}
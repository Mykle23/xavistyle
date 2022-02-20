import * as fs from 'fs';
import 'dotenv/config';

class Ledger{
    static collection = {}

    static add(user_id, expense){
        if(!this.collection[user_id])this.collection[user_id]=[];
        let bag = this.collection[user_id]
        bag.push(expense)
        // return Ledger.save();   
    }

    static save() {

        try {
            fs.writeFileSync(process.env.DATA_FILE_EXPENESES, JSON.stringify(this.collection));
            return true;
        } catch (err) {
            return false;
        }
    }
}

export {Ledger}
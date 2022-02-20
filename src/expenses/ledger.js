import * as fs from 'fs';
import 'dotenv/config';

class Ledger{
    static collection = {}

    static add(user_id, expense){
        if(!this.collection[user_id])this.collection[user_id]=[];
        let bag = this.collection[user_id]
        bag.push(expense)
        if(!(Ledger.save())) {
            return false;
        };
    }

    static save() {
        try {
            fs.writeFileSync(process.env.DATA_FILE_EXPEkNESES, JSON.stringify(this.collection));
            // console.log('Sucess in saving');
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

export {Ledger}
import * as fs from 'fs';

class Ledger{
    static collection = {}

    static add(user_id, expense){
        if(!this.collection[user_id])this.collection[user_id]=[];
        let bag = this.collection[user_id]
        bag.push(expense)
        if (!(Ledger.save())) {
            throw 'Error in saving ledger';
        };
    }

    static save() {
        try {
            fs.writeFileSync(process.env.DATA_FILE_EXPENESES, JSON.stringify(this.collection));
            console.log('Sucess in saving');
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}

export {Ledger}
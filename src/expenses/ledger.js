class Ledger{
    static collection = {}

    static add(user_id, expense_id){
        if(!this.collection[user_id])this.collection[user_id]=[];
        let bag = this.collection[user_id]
        bag.push(expense_id)
    }
}

export {Ledger}

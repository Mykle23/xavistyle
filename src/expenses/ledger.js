class Ledger{
    static collection = {}

    static add(user, expense){
        if(!this.collection[user])this.collection[user]=[]
        const bag = this.collection[user]
        bag.push(expense)
    }
}

export {Ledger}

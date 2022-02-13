class Expense{
    constructor(theExpense){
        this.money = theExpense.money
        this.concept = theExpense.concept
        this.date = theExpense.date || this.today()
    }

    today(){
        return 'today'
    }

    description(){
        return `${this.date} ${this.money} "${this.concept}"`
    }
}
export {Expense}
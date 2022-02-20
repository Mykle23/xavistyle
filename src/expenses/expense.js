class Expense{
    constructor(theExpense){
        this.money = theExpense.money
        this.concept = theExpense.concept
        this.date = theExpense.date || this.today()
    }

    today(){
        const today = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          }).format(Date.now());
        return today;
    }

    description(){
    //    gasto registrado: el 2/20/2022, 35 "copas"
        return `El ${this.date}, cantidad: ${this.money} "${this.concept}"`
    }
}
export {Expense}
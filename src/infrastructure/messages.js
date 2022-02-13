class Messages{
    static LITERALS = {
        'help': 'hola majete',
        'intro': 'Soy el botijo de los Gost',
        'expense.added': 'gasto registrado'
    };

    static retrieve(key){
        return this.LITERALS[key];
    }
}

export {Messages};
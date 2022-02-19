class Messages{
    static LITERALS = {
        'help': 'hola majete',
        'intro': 'Soy el botijo de los Gost',
        'expense.added': 'gasto registrado',
        'err.ledger':'Ha habido un problema al registrar el gasto.'
    };

    static retrieve(key){
        return this.LITERALS[key];
    }
}

export {Messages};
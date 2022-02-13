import {Actions} from '../src/actions.js'

describe('Actions',()=>{
    it('retrieves help',()=>{
        expect(Actions.getHelp()).toBe('hola majete');
    });

    it('identifies itself',()=>{
        expect(Actions.getIntroduction()).toBe('Soy el botijo de los Gost');
    });

    it('add gastos for a user',()=>{
        const user = 'xaviuzz'
        const message = '35 euros en copas'
        const result = Actions.addExpense(user,message)
        const today = 'today'
        expect (result).toBe(`gasto registrado: ${today} 35 "copas"`)
    });

});
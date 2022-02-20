import {Actions} from '../src/actions.js'

describe('Actions',()=>{
    it('retrieves help',()=>{
        expect(Actions.getHelp()).toBe('hola majete');
    });

    it('identifies itself',()=>{
        expect(Actions.getIntroduction()).toBe('Soy el botijo de los Gost');
    });

    // it('add gastos for a user',()=>{
    //     const default_user = {
    //         id: 34512345,
    //         first_name: 'Fernado',
    //         name: 'melacoge con la mano'
    //     };
    //     const today = new Intl.DateTimeFormat('en-US', {
    //         year: 'numeric',
    //         month: 'numeric',
    //         day: 'numeric'
    //       }).format(Date.now());
    //     const message = '25 euros en copas'
    //     const result = Actions.addExpense(default_user,message)
        
    //     expect(result).toBe(`gasto registrado: El ${today}, cantidad: 25 \"copas\"`)
    // });

    it('nuevo_usuario', () =>{
        const default_user = {
            id: 34512345,
            first_name: 'Fernado',
            name: 'melacoge con la mano'
        };
        const message = '';
        const expectedResult = `usuario registrado: Hola ${default_user.first_name} tu usuario ha sido creado.`;

        expect(Actions.newUser(default_user,message)).toBe(expectedResult);
    })

});
import {Roster} from './roster'

class Users {
    static ensure(user){
        if (!Roster.exits(user)){Roster.create(user)};
    }

    static describe(theUser) {

        return `Hola ${theUser.first_name} tu usuario ha sido creado.`;
    }
}
export {Users}
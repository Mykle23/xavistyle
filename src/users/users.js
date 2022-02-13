import {Roster} from './roster'

class Users {
    static ensure(user){
        if (!Roster.exits(user)){Roster.create(user)};
    }    
}
export {Users}
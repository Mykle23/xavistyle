class Parser{
    static extractMoney(message){
        let result =parseInt(message.split(' ')[0]); 
        return result;
    
    };
    static extractConcept(message){
        let result =message.split(' ').slice(1).join(' '); 
        result = result.replace(/ \d+\/\d+\/\d+/gm,'');
        return result;
    };
    static extractDate(message) {
        let result = message.match(/ \d+\/\d+\/\d+/gm);
        
        return (result)?result[0].trim():undefined;
    } ;
    static extractId(from) {return from.id};
    static extractFirstName(from) {return from.first_name}
    static extractName(from) {return from.username}
}

export {Parser}

// {
//     message_id: 1492,
//     from: {
//       id: 368521905,
//       is_bot: false,
//       first_name: 'Nacho',
//       last_name: 'mi apellido',
//       username: 'Woxstone',
//       language_code: 'en'
//     },
//     chat: {
//       id: 368521905,
//       first_name: 'Nacho',
//       last_name: 'mi apellido',
//       username: 'Woxstone',
//       type: 'private'
//     },
//     date: 1645381679,
//     text: '/nuevo_usuario',
//     entities: [ { offset: 0, length: 14, type: 'bot_command' } ]
//   }
class Parser{
    static extractMoney(message){return 35};
    static extractConcept(message){return 'copas'};
    static extractDate(message) {return undefined} ;
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
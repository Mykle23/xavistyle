test('djfahks',() => {
    expect(true).toBe(true);
})
import { MyBot } from '../src/mybot.js';
import { Telegraf } from 'telegraf';


describe('it works ',() => {
    test('its a telegraf bot',() => {
        let aBot = new MyBot();
        expect(aBot.bot).toBeDefined();
        expect(aBot.bot).toBeInstanceOf(Telegraf);

    })
})
describe('has functions to handle messages',() => {
    test('can strip the command form the message',() => {
        let mybot = new MyBot();
        const message = '/anycommand cleaned message';
        expect(mybot.clean(message)).toBe('cleaned message');
    })
})
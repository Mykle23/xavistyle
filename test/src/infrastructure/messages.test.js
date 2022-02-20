test('djfahks',() => {
    expect(true).toBe(true);
})
import { Messages } from '../../../src/infrastructure/messages.js';

describe('messages test',() => {
    it('control of the return message',() => {
        const helpExpected = Messages.LITERALS['help'];
        const introExpected = Messages.LITERALS['intro'];
        const expenesExpected = Messages.LITERALS['expense.added'];

        expect(Messages.retrieve('help')).toEqual(helpExpected);
        expect(Messages.retrieve('intro')).toEqual(introExpected);
        expect(Messages.retrieve('expense.added')).toEqual(expenesExpected);
    });
});
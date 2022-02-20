import { Parser } from '../../../src/helpers/parser.js';

describe('Parser method testting',() => {
    it('should parse money from a formated string NN concept',() => {
        const expectedResult = 42;
        const intakeString = '42 manzanas';

        let result = Parser.extractMoney(intakeString);
        expect(result).toEqual(expectedResult);
    });
    it('should parse concept from a formated string NN concept',() => {
        const expectedResult = 'manzanas verdes';
        const intakeString = '42 manzanas verdes';

        let result = Parser.extractConcept(intakeString);
        expect(result).toEqual(expectedResult);
    });
    it('should parse concept from a formated string NN concept',() => {
        const expectedResult = 'manzanas verdes';
        const intakeString = '42 manzanas verdes 10/02/2022';

        let result = Parser.extractConcept(intakeString);
        expect(result).toEqual(expectedResult);
    });
    it('should parse date from a formated string NN concept',() => {
        const expectedResult = undefined;
        const intakeString = '42 manzanas verdes  ';

        let result = Parser.extractDate(intakeString);
        expect(result).toEqual(expectedResult);
    });
    it('should parse date from a formated string NN concept',() => {
        const expectedResult = '10/02/2022';
        const intakeString = '42 manzanas verdes 10/02/2022';

        let result = Parser.extractDate(intakeString);
        expect(result).toEqual(expectedResult);
    });
})
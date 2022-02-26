test('djfahks', () => {
    expect(true).toBe(true);
})
import { Parser } from '../../../src/helpers/parser.js';

describe('Parser method testting', () => {
    it('should parse money from a formated string NN concept', () => {
        const expectedResult = 42;
        const intakeString = '42 manzanas';

        let result = Parser.extractMoney(intakeString);
        expect(result).toEqual(expectedResult);
    });
    it('should parse concept from a formated string NN concept', () => {
        const expectedResult = 'manzanas verdes';
        const intakeString = '42 manzanas verdes';

        let result = Parser.extractConcept(intakeString);
        expect(result).toEqual(expectedResult);
    });
    it('should parse concept from a formated string NN concept', () => {
        const expectedResult = 'manzanas verdes';
        const intakeString = '42 manzanas verdes 10/02/2022';

        let result = Parser.extractConcept(intakeString);
        expect(result).toEqual(expectedResult);
    });
    it('should parse date from a formated string NN concept', () => {
        const expectedResult = undefined;
        const intakeString = '42 manzanas verdes  ';

        let result = Parser.extractDate(intakeString);
        expect(result).toEqual(expectedResult);
    });
    it('should parse date from a formated string NN concept', () => {
        const expectedResult = '10/02/2022';
        const intakeString = '42 manzanas verdes 10/02/2022';

        let result = Parser.extractDate(intakeString);
        expect(result).toEqual(expectedResult);
    });
});

    //test_m.test.js
    describe('test_m.test.js', () => {



        it('should parse money from a formated string NN concept', () => {
            const expectedResult = 100;
            const intakeString = '100€ concepto';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);

        });
        it('should parse money from a formated string NN concept', () => {
            const expectedResult = -100;
            const intakeString = '-100€ concepto';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse money from a formated string NN concept', () => {
            const expectedResult = 100.50;
            const intakeString = '100.50€ concepto';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse money from a formated string NN concept', () => {
            const expectedResult = 0;
            const intakeString = '0€ concepto';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse money from a formated string NN concept', () => {
            const expectedResult = -0;
            const intakeString = '-0€ concepto';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse money from a formated string NN concept', () => {
            const expectedResult = 100.50;
            const intakeString = '100,50€ concepto';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse money from a formated string NN concept', () => {
            const expectedResult = 0.11111111111111111111;
            const intakeString = '0,11111111111111111111€ concepto';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse money from a formated string NN concept', () => {
            const expectedResult = 5;
            const intakeString = '5euros concepto';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse money from a formated string NN concept', () => {
            //en un principio hay que arreglar esto, porque decidimos que no deberia poderse escribir coma, punto,etc.. delante de un numero deberia saltar un mensaje de error
            const expectedResult = 0.50;
            const intakeString = ',5  concepto';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse money from a formated string NN concept', () => {
            const expectedResult = 5;
            const intakeString = '5, concepto';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse money from a formated string NN concept', () => {
            const expectedResult = 5.50;
            const intakeString = `5'50  concepto`;

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse money from a formated string NN concept', () => {
            const expectedResult = 100.50;
            const intakeString = '100,50€ concepto';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse money from a formated string NN concept', () => {
            //esto tiene devuelve error, no queremos que se pueda typear de esta forma
            //forma de solucionarlo, si lleva una coma y no tiene un numero delante devuelve error
            const expectedResult = 0.50;
            const intakeString = `'50€ concepto`;

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
    });
    describe('test_p.test.js sobre la posicion de concepto', () => {

        it('should parse concept from a formated string NN concept', () => {
            const expectedResult = 'concepto';
            const intakeString = '23 concepto';

            let result = Parser.extractConcept(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse concept from a formated string NN concept', () => {
            const expectedResult = 'concepto';
            const intakeString = 'concepto 23';

            let result = Parser.extractConcept(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse concept from a formated string NN concept', () => {
            const expectedResult = 'concepto concepto';
            const intakeString = 'concepto 23 concepto';

            let result = Parser.extractConcept(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse concept from a formated string NN concept', () => {
            const expectedResult = 'concepto de concepto';
            const intakeString = 'concepto de concepto';

            let result = Parser.extractConcept(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse concept from a formated string NN concept', () => {
            const expectedResult = 'sin concepto';
            const intakeString = '23';

            let result = Parser.extractConcept(intakeString);
            expect(result).toEqual(expectedResult);
        });
        it('should parse concept from a formated string NN concept', () => {
            const expectedResult = 'sin concepto';
            const intakeString = '';
            // arreglar, se tiene que poner sin cocenpto si el string esta vacio
            let result = Parser.extractConcept(intakeString);
            expect(result).toEqual(expectedResult);
        });
    });

    describe('test_p.test.js', () => {

        it('should parse money from a formated string NN concept', () => {
            const expectedResult = 42;
            const intakeString = '42 manzanas';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
            });
        describe('test_p.test.js',()=>{

        it('should parse money from a formated string NN concept',() => {
            const expectedResult = 42;
            const intakeString = '42 manzanas';

            let result = Parser.extractMoney(intakeString);
            expect(result).toEqual(expectedResult);
        });
        // });
        // describe('test_p.test.js',()=>{

            it('should parse money from a formated string NN concept',() => {
                const expectedResult = 42;
                const intakeString = '42 manzanas';

                let result = Parser.extractMoney(intakeString);
                expect(result).toEqual(expectedResult);
            });
            });

            describe('test of format date', () => {
                it('DD-MM-YYYY', () => {
                    const intake ='23 concepto 28/10/1999';
                    const expected = '28/10/1999';

                    const result = Parser.extractDate(intake);
                    expect(result).toBe(expected);
                });

                it('MM/DD/YYYY', () => {
                    const intake ='23 concepto 10/28/1999';
                    const expected = '10/28/1999';

                    const result = Parser.extractDate(intake);
                    expect(result).toBe(expected);
                });

                // it('DD-MM-YYYY', () => {
                //     const intake ='23 concepto 28-10-1999';
                //     const expected = '28/10/1999';

                //     const result = Parser.extractDate(intake);
                //     expect(result).toBe(expected);
                // });
            })

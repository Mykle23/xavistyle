import { runIntegrationTest, showTestResults } from './integrationTestRunner.js'
// clase a testear
import { MyBot } from '../src/myBot.js';

// describe: creacion de usuario, meter gastos y pedir gastos.

const aBot = new MyBot();
aBot.start();

const fechaDeHoy = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}).format(Date.now());

const configurationTest = {
  client_user: {
    id: 34512345,
    first_name: 'Nacho',
    name: 'melacoge con la mano'
  }
};


(async () => {
  let resultMessage = [];

  // testing actions
  resultMessage.push(await runIntegrationTest('nuevo usuario command test', "/nuevo_usuario", `usuario registrado: Hola ${configurationTest.client_user.first_name} tu usuario ha sido creado.`, 0));
  resultMessage.push(await runIntegrationTest('añadir primer gasto command test', '/addgasto 43 manzas', `gasto registrado: El ${fechaDeHoy}, cantidad: 43 "manzas"`, 0));
  resultMessage.push(await runIntegrationTest('añadir primer gasto command test', '/addgasto 21 sardinas 01/10/2021', `gasto registrado: El 01/10/2021, cantidad: 21 "sardinas"`, 0));
  resultMessage.push(await runIntegrationTest('gastos command test', "/gastos", `El ${fechaDeHoy}, cantidad: 43 "manzas"
El 01/10/2021, cantidad: 21 "sardinas"`, 0));

  showTestResults(resultMessage);
  process.exit(1);

})();


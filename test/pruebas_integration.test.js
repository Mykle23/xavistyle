import {runIntegrationTest , showTestResults} from './integrationTestRunner.js'
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
  client_user : {
    id: 34512345,
    first_name: 'Nacho',
    name: 'melacoge con la mano'
}
};


(async () => {
  let resultMessage = [];
 
  // testing actions
  resultMessage.push(await runIntegrationTest('nuevo usuario command test', "/nuevo_usuario",`usuario registrado: Hola ${configurationTest.client_user.first_name} tu usuario ha sido creado.`, 0));
  resultMessage.push(await runIntegrationTest('añadir primer gasto command test', '/addgasto 43 manzas',`Gatos añadido.`, 0));
  // resultMessage.push(await runIntegrationTest('añadir segundo gasto command test', '/addgastos 23 sardinas',`Gatos añadido.`, 0));
  // resultMessage.push(await runIntegrationTest('gastos command test', "/gastos",`El ${fechaDeHoy}, cantidad: 43 "manzas" 
  // El ${fechaDeHoy}, cantidad: 23 "sardinas"`, 0));

  showTestResults(resultMessage);
  process.exit(1);

})(); 


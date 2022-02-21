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


(async () => {
  let resultMessage = [];
 
  // testing actions
  resultMessage.push(await runIntegrationTest('test de creacion de nuevo usuario command test', "/nuevo_usuario","", 0));
  // resultMessage.push(await runIntegrationTest('gastos command test', '/gastos','gasto registrado: today 35 "copas"', 5));
  // resultMessage.push(await runIntegrationTest('start command test', "/start","Soy el botijo de los Gost", 5));

  showTestResults(resultMessage);
  process.exit(1);

})(); 


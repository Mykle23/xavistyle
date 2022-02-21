import {runIntegrationTest , showTestResults} from './integrationTestRunner.js'
// clase a testear
import { MyBot } from '../src/myBot.js';



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
  // resultMessage.push(await runIntegrationTest('help command test', "/help","hola majete", 0));
  resultMessage.push(await runIntegrationTest('gastos command test', '/gastos',`El ${fechaDeHoy}, cantidad: 35 "copas`, 0));
  // resultMessage.push(await runIntegrationTest('start command test', "/start","Soy el botijo de los Gost", 0));

  showTestResults(resultMessage);
  process.exit(1);

})(); 


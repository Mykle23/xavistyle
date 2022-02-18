import {runIntegrationTest , showTestResults} from './integrationTestRunner.js'
// clase a testear
import { MyBot } from '../src/myBot.js';



const aBot = new MyBot();
aBot.start();



(async () => {
  let resultMessage = [];
 
  // testing actions
  resultMessage.push(await runIntegrationTest('help command test', "/help","hola majete", 0));
  resultMessage.push(await runIntegrationTest('gastos command test', '/gastos','gasto registrado: today 35 "copas"', 4));
  resultMessage.push(await runIntegrationTest('start command test', "/start","Soy el botijo de los Gost", 0));

  showTestResults(resultMessage);
  process.exit(1);

})(); 


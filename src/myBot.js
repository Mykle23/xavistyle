import { Telegraf } from 'telegraf';
import { Settings } from './infrastructure/settings.js';
import 'dotenv/config';
import { Actions } from './actions.js';

class MyBot{

    constructor(){
        this.bot = this.build()
        this.configure();
    }

    build(){
        const fakeBotKey = process.env.BOT_TOKEN;
        const theBot = new Telegraf(fakeBotKey);
        return theBot
    }

    configure(){
        this.addHelp()
        this.addIntroduction()
        this.addCommands()
    }
    

    addCommands(){
        this.bot.command('addgasto',(ctx) => this.runAction(ctx,Actions.addExpense));
        this.bot.command('nuevo_usuario',(ctx) => this.runAction(ctx,Actions.newUser));
        this.bot.command('gastos',(ctx) => this.runAction(ctx,Actions.showExpenses));
    }

    addHelp(){
        this.bot.help((ctx) => this.runAction(ctx,Actions.getHelp))
    }

    addIntroduction(){
        this.bot.start((ctx)=>this.runAction(ctx,Actions.getIntroduction))
    }

    runAction(ctx, action){
        const user_ctx = ctx.message.from;
        const message = this.clean(ctx.message.text)
        ctx.reply(action(user_ctx,message));
    }

    clean(text){
        let cleaned = text;
        cleaned = cleaned.replace(/^\/\S+ /,'');
        return cleaned
    }

    start(){
        this.bot.launch();
    }


   
};

export { MyBot };
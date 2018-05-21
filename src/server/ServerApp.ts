import * as Koa from 'koa';

import { RunnableHandler } from './ServerTypes';
import { IRunnable } from './IRunnable';

export default class ServerApp implements IRunnable {

    private app: Koa;
    
    constructor() {
        this.app = new Koa()
    }

    getRunnerHandler(): RunnableHandler {
        return this.app.callback();
    }
}
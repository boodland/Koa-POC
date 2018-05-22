import * as Koa from 'koa';

import { Server } from 'http';

export default class ServerApp {

    private app: Koa;
    private server: Server;
    
    constructor() {
        this.app = new Koa()
    }

    run(port: number = 3000): Server {
        this.server = this.app.listen(port)
        return this.server;
    }
}
import * as Koa from 'koa';

import HttpServer from './HttpServer';

export default class ServerApp {

    private app: Koa;
    
    constructor() {
        this.app = new Koa()
    }

    run(port: number = 3000) : HttpServer {
        const server = this.app.listen(port)
        return new HttpServer(server);
    }
}
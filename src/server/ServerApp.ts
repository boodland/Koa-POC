import * as Koa from 'koa';

import WebServer from './WebServer';

export default class ServerApp {

    private app: Koa;
    
    constructor() {
        this.app = new Koa()
    }

    run(port: number = 3000) : WebServer {
        const server = this.app.listen(port)
        return new WebServer(server);
    }
}
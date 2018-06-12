import * as Koa from 'koa';

import { Server } from 'http';
import Middleware from '../middleware/Middleware';

export default class ServerApp {

    private app: Koa;
    private server: Server;
    
    constructor() {
        this.app = new Koa()
    }

    use(...middlewares: Middleware[]) {
        middlewares.forEach(middleware => {
            this.app.use(middleware.getHandler());
        });
    }

    run(port: number = 3000): Server {
        
        this.server = this.app.listen(port)
        return this.server;
    }
}
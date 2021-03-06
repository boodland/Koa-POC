import * as Koa from 'koa';

import { Server } from 'http';
import { MiddlewareHandler } from '../middleware/index';
import { Routable } from './../router/index';

export default class ServerApp {

    private app: Koa;
    private server: Server;
    
    constructor() {
        this.app = new Koa()
    }

    use(...middlewares: MiddlewareHandler[]) {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }

    routes(...routables: Routable[]) {
        routables.forEach(routable => {
            this.app.use(routable.getRoutes())
        })
    }

    run(port: number = 3000): Server {
        this.server = this.app.listen(port)
        return this.server;
    }
}
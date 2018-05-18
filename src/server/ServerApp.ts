import * as Koa from 'koa';

import IServer from './IServer';
import HttpServer from './HttpServer'

export default class ServerApp {

    private app: Koa;
    
    constructor() {
        this.app = new Koa()
    }

    public run(port: number = 3000): IServer {
        
        const server = this.app.listen(port, () => {
            console.log(`Server listening on port: ${port}`);
        });

        return new HttpServer(server);
    }
}
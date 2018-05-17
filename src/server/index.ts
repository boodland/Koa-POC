import * as Koa from 'koa';
import { Server } from 'http';

export class ServerApp {

    private app: Koa;
    private port: number;
    
    constructor(port: number = 3000) {
        this.app = new Koa()
        this.port = port
    }

    public run(): Server {
        
        const server = this.app.listen(this.port, () => {
            console.log(`Server listening on port: ${this.port}`);
        });

        return server;
    }
}
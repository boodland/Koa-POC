import * as Koa from 'koa';

export class ServerApp {

    private app = new Koa();
    private port: number;
    
    constructor(port: number = 3000) {
        this.port = port
    }

    public initialize(): void {
        this.app.use(async (ctx) => {
            ctx.body = {
                status: 'success',
                message: 'hello, world!'
            };
        });
    }

    public run(): void {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port: ${this.port}`);
        });
    }
}

const server = new ServerApp();
server.initialize();
server.run();
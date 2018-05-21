import { RunnableHandler } from './ServerTypes';
import { Server, createServer } from 'http';
import { IRunnable } from './IRunnable';

export default class HttpServer {

    private server: Server;
    private runnableHandler: RunnableHandler

    constructor(runnable : IRunnable) {
        this.runnableHandler = runnable.getRunnerHandler();
    }

    run(port: number = 3000): void {
        this.server = createServer(this.runnableHandler)
        this.server.listen(port);
    }

    public close() : void {
        this.server.close();
        createServer()
    }
}
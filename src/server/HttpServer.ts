import { Server } from 'http';

export default class HttpServer {

    private server: Server;

    constructor(server : Server) {
        this.server = server;
    }

    public close() : void {
        this.server.close();
    }
}
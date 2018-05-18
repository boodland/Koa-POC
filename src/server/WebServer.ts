import { Server } from 'http';

export default class WebServer {

    private server: Server;

    constructor(server : Server) {
        this.server = server;
    }

    public close() : void {
        this.server.close();
    }
}
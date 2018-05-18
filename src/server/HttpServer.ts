import { Server } from 'http';

import IServer from './IServer'

export default class HttpServer implements IServer {

    private server: Server;

    constructor(server : Server) {
        this.server = server;
    }

    public close() : void {
        this.server.close();
    }
}
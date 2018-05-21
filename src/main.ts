import ServerApp, { HttpServer }  from './server/index'

const serverApp : ServerApp = new ServerApp();
const server = new HttpServer(serverApp);
server.run();
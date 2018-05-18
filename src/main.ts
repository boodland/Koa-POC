import ServerApp, { IServer }  from './server/index'

const serverApp : ServerApp = new ServerApp();
const server : IServer = serverApp.run();
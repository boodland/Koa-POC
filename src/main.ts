import ServerApp  from './server/index'
import Middleware from './middleware/Middleware';
import { authenticated, piPower, reverse } from './middleware/Handlers';

const serverApp : ServerApp = new ServerApp();
let middlewares: Middleware[] = [];
middlewares.push(new Middleware(authenticated))
middlewares.push(new Middleware(reverse))
middlewares.push(new Middleware(piPower))
serverApp.use(...middlewares);
serverApp.run();
import ServerApp  from './server/index'
import Middleware, { authenticated, piPower, reverse } from './middleware/index';

const serverApp : ServerApp = new ServerApp();
let middlewares: Middleware[] = [];
middlewares.push(new Middleware(authenticated))
middlewares.push(new Middleware(reverse))
middlewares.push(new Middleware(reverse, 'forward'))
middlewares.push(new Middleware(piPower))
serverApp.use(...middlewares);
serverApp.run();
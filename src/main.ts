import ServerApp  from './server/index'
import { MiddlewareHandler, authenticated, piPower, reverse } from './middleware/index';

const serverApp : ServerApp = new ServerApp();
let middlewares: MiddlewareHandler[] = [];
middlewares.push(authenticated())
middlewares.push(reverse())
middlewares.push(reverse('forward'))
middlewares.push(piPower())
serverApp.use(...middlewares);
serverApp.run();
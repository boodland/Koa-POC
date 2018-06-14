import { AdminRouter } from './router/admin';
import ServerApp  from './server/index'
import { MiddlewareHandler, authenticated, piPower, reverse } from './middleware/index';

const serverApp : ServerApp = new ServerApp();

let middlewares: MiddlewareHandler[] = [];
middlewares.push(authenticated())
middlewares.push(reverse())
middlewares.push(reverse('forward'))
serverApp.use(...middlewares);

const adminRouter = new AdminRouter();
serverApp.routes(adminRouter);

serverApp.use(piPower())
serverApp.run();
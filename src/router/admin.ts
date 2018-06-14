import * as Router from 'koa-router';
import { Routable } from './index';
import { dummyRouteHandler } from '../middleware/index';

export class AdminRouter implements Routable {
    
    private router: Router;

    constructor() {
        this.router = new Router(
            { prefix: '/admin' }
        );

        this.router.get('/', dummyRouteHandler());
        this.router.get('/:id', dummyRouteHandler())
    }

    getRoutes() { 
        return this.router.routes();
    }
    
};
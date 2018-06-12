import { MiddlewareHandler, MiddlewareFunction } from './Handlers';

export default class Middleware {

    private handler: MiddlewareHandler;
    private options: any;

    constructor (handler: MiddlewareHandler, options?: any) {
        this.handler = handler;
        this.options = options;
    };

    getHandler() : MiddlewareFunction {
        return this.handler(this.options);
    };
};

export { MiddlewareHandler };
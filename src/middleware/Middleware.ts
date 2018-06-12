import { Middleware as MiddlewareFunction } from 'koa'

type MiddlewareHandler = (options?: any) => MiddlewareFunction;

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
import { Middleware as MiddlewareFunction } from 'koa'

type MiddlewareHandler = (options?: any) => MiddlewareFunction;

export default class Middleware {

    private name: string;
    private handler: MiddlewareHandler;

    constructor (handler: MiddlewareHandler) {
        this.handler = handler;
    };

    getFunction(options?: any) : MiddlewareFunction {
        return this.handler(options);
    };
};

export { MiddlewareHandler };
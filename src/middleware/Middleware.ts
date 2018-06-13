import { MiddlewareWrapper, MiddlewareHandler } from './Handlers';

export default class Middleware {

    private handler: MiddlewareWrapper;
    private options: any;

    constructor (handler: MiddlewareWrapper, options?: any) {
        this.handler = handler;
        this.options = options;
    };

    getHandler() : MiddlewareHandler {
        return this.handler(this.options);
    };
};

export { MiddlewareWrapper };
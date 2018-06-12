import { Middleware as MiddlewareFunction } from 'koa'
type MiddlewareHandler = (options?: any) => MiddlewareFunction;

const authenticated: MiddlewareHandler = (message: string = 'The user has been authenticated\n') => {
    return async function random(ctx, next) {
        ctx.body += message
        await next();
    };
};
  
const reverse: MiddlewareHandler = (text: string = 'backwards') => {
    return async function backwards(ctx, next) {
        ctx.body += `Reverse of ${text} is ${text.split("").reverse().join("")}\n`
        await next();     
    }
};
  
const piPower: MiddlewareHandler = (exponent: number = 1) => {
  return async function piPower(ctx, next) {
        ctx.body += `Pi to power ${exponent}=${Math.pow(Math.PI, exponent)}`;
    }
};

export { MiddlewareHandler, MiddlewareFunction, authenticated, piPower, reverse }
import { Middleware as MiddlewareHandler } from 'koa'
type MiddlewareWrapper = (options?: any) => MiddlewareHandler;

const authenticated: MiddlewareWrapper = (message: string = 'The user has been authenticated\n') => {
    return async function random(ctx, next) {
        if (!ctx.body) ctx.body = '';
        ctx.body += message
        await next();
    };
};
  
const reverse: MiddlewareWrapper = (text: string = 'backwards') => {
    return async function backwards(ctx, next) {
        if (!ctx.body) ctx.body = '';
        ctx.body += `Reverse of ${text} is ${text.split("").reverse().join("")}\n`
        await next();     
    }
};
  
const piPower: MiddlewareWrapper = (exponent: number = 1) => {
  return async function piPower(ctx, next) {
        if (!ctx.body) ctx.body = '';
        ctx.body += `Pi to power ${exponent}=${Math.pow(Math.PI, exponent)}`;
    }
};

export { MiddlewareWrapper, MiddlewareHandler, authenticated, piPower, reverse }
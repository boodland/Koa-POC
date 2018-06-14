import { Middleware as MiddlewareHandler, Context } from 'koa'

const authenticated = (message: string = 'The user has been authenticated\n'): MiddlewareHandler => {
    return async function random(ctx, next) {
        if (!ctx.body) ctx.body = '';
        ctx.body += message
        await next();
    };
};
  
const reverse = (text: string = 'backwards'): MiddlewareHandler => {
    return async function backwards(ctx, next) {
        if (!ctx.body) ctx.body = '';
        ctx.body += `Reverse of ${text} is ${text.split("").reverse().join("")}\n`
        await next();     
    }
};
  
const piPower = (exponent: number = 1): MiddlewareHandler => {
  return async function piPower(ctx, next) {
        if (!ctx.body) ctx.body = '';
        ctx.body += `Pi to power ${exponent}=${Math.pow(Math.PI, exponent)}`;
    }
};

export { MiddlewareHandler, Context, authenticated, piPower, reverse }
import { should, expect, } from 'chai';

import Middleware, { MiddlewareHandler } from './Middleware';
import { Context } from 'koa';

after(function(done) {
    done();
});

describe('Middleware', function() {
    
    const defaultMessage = "Hello World!"
    const fooHandler: MiddlewareHandler = (options=defaultMessage) => {
        
        const configuration = options;
        
        return async function Foo(mock, next) {
            mock.state = {
                message: configuration,
            };
            await next();
        };
    }
    
    describe('Create Middleware with default message', function() {

        const middleware = new Middleware(fooHandler);
        
        it('should exists', function() {
            should().exist(middleware);
        });

        
        it(`should set message to ${defaultMessage}`, async function() {
            
            let mock = <Context>{};
            const noop = (): Promise<any> => { return };
            
            const handler = middleware.getHandler();
            expect(handler).to.be.a('function');
            await handler(mock, noop)
            should().equal(mock.state.message, defaultMessage);

        });

    });

    describe('Create Middleware with custom message', function() {

        const customMessage= "This is a custom message";
        const middleware = new Middleware(fooHandler, customMessage);
        
        it('should exists', function() {
            should().exist(middleware);
        });

        
        it(`should set message to ${customMessage}`, async function() {
            
            let mock = <Context>{};
            const noop = (): Promise<any> => { return };
            
            const handler = middleware.getHandler();
            expect(handler).to.be.a('function');
            await handler(mock, noop)
            should().equal(mock.state.message, customMessage);

        });

    });

});
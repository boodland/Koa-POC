import { should, expect, } from 'chai';

import Middleware, { MiddlewareHandler } from './Middleware';
import { Context, BaseContext } from 'koa';

after(function(done) {
    done();
});

describe('Middleware', function() {
    
    const message = "Hello World!"
    const fooHandler: MiddlewareHandler = (options=message) => {
        
        const configuration = options;
        
        return async function Foo(mock, next) {
            mock.state = {
                message: configuration,
            };
            await next();
        };
    }
    const middleware = new Middleware(fooHandler);

    describe('Create Middleware', function() {
        
        it('should exists', function() {
            should().exist(middleware);
        });

        
        it(`should set message to ${message}`, async function() {
            
            let mock = <Context>{};
            const noop = (): Promise<any> => { return };
            
            const handler = middleware.getFunction();
            expect(handler).to.be.a('function');
            await handler(mock, noop)
            should().equal(mock.state.message, message);

        });

    });

});
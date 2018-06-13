import { should, expect, } from 'chai';

import { authenticated, reverse, piPower } from './Wrappers';
import { Context } from 'koa';

after(function(done) {
    done();
});

describe('Handlers', function() {
    
    describe('Authenticated', function() {
        
        it('should be a function', function() {
            expect(authenticated).to.be.a('function');
            const handler = authenticated()
            expect(handler).to.be.a('function');
            expect(handler.name).to.not.be.empty;
        });

        it(`should set body context to the default message`, async function() {
            const message = 'The user has been authenticated\n';
            let mock = <Context>{};
            const noop = (): Promise<any> => { return };
            await authenticated()(mock, noop);
            should().equal(mock.body, message);
        });

        it(`should set body context to the new message`, async function() {
            const message = 'The user is valid\n';
            let mock = <Context>{};
            const noop = (): Promise<any> => { return };
            await authenticated(message)(mock, noop)
            should().equal(mock.body, message);
        });

    });

    describe('Reverse', function() {
        
        it('should be a function', function() {
            expect(reverse).to.be.a('function');
            const handler = reverse()
            expect(handler).to.be.a('function');
            expect(handler.name).to.not.be.empty;
        });

        it(`should set body context to the reversed default text`, async function() {
            const message = 'Reverse of backwards is sdrawkcab\n';
            let mock = <Context>{};
            const noop = (): Promise<any> => { return };
            await reverse()(mock, noop)
            should().equal(mock.body, message);
        });

        it(`should set body context to the new reversed text`, async function() {
            const message = 'Reverse of forward is drawrof\n';
            let mock = <Context>{};
            const noop = (): Promise<any> => { return };
            await reverse('forward')(mock, noop)
            should().equal(mock.body, message);
        });

    });

    describe('PiPower', function() {
        
        it('should be a function', function() {
            expect(piPower).to.be.a('function');
            const handler = piPower()
            expect(handler).to.be.a('function');
            expect(handler.name).to.not.be.empty;
        });

        it(`should set body context to pi`, async function() {
            const message = `Pi to power 1=${Math.pow(Math.PI, 1)}`;
            let mock = <Context>{};
            const noop = (): Promise<any> => { return };
            await piPower()(mock, noop)
            should().equal(mock.body, message);
        });

        it(`should set body context to pi power to 3`, async function() {
            const message = `Pi to power 3=${Math.pow(Math.PI, 3)}`;
            let mock = <Context>{};
            const noop = (): Promise<any> => { return };
            await piPower(3)(mock, noop)
            should().equal(mock.body, message);
        });

    });

});
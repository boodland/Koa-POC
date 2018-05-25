import { should, expect, } from 'chai';

import Middleware from './Middleware';

after(function(done) {
    done();
});

describe('Middleware', function() {

    const middleware = new Middleware();

    describe('Create Middleware', function() {
        
        it('should exists', function() {
            should().exist(middleware);
        });

    });

});
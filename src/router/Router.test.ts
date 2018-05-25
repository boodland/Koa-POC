import { should, expect, } from 'chai';

import Router from './Router'

after(function(done) {
    done();
});

describe('Router', function() {

    const router = new Router();

    describe('Create Router', function() {
        
        it('should exists', function() {
            should().exist(router);
        });

    });

});
  
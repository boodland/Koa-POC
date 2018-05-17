import { ServerApp } from './index';

import 'mocha'
import { should, expect, use, request } from 'chai';

process.env.NODE_ENV = 'test';
const port = 3001
const serverApp = new ServerApp(3001);

after(function(done) {
  done();
});

describe('Server', function() {

  describe('Create Server App', function() {
    
    it('should exists', function() {
      should().exist(serverApp);
    });

    it('expect to be ServerApp instance', function() {
      expect(serverApp).to.be.an.instanceof(ServerApp)
    });

  });

  describe('Run Server App', function() {

    use(require('chai-http'));
    const webServer = serverApp.run();
    
    it('should run on localhost:3001', function(done) {
      request('http://localhost:3001')
      .get('/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        done()
      })
    });

    after(function() {
      webServer.close();
    })

  });

});





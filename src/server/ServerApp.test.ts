import { should, expect, use, request } from 'chai';

import ServerApp, { IServer } from './index';

const port = 3001
const serverApp = new ServerApp();

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
    const server : IServer = serverApp.run(port);
    
    it(`should run on localhost:${port}`, function(done) {
      request(`http://localhost:${port}`)
      .get('/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        done()
      })
    });

    after(function() {
      server.close();
    })

  });

});

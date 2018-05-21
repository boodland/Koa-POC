import { should, expect, use, request } from 'chai';

import ServerApp from './ServerApp';
import WebServer from './HttpServer';

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

  });

  describe('Run Server App', function() {

    use(require('chai-http'));
    const server = serverApp.run(port);
    
    it(`should run on localhost:${port}`, function(done) {
      request(`http://localhost:${port}`)
      .get('/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        done()
      })
    });

    it('expect to be WebServer instance', function() {
      expect(server).to.be.an.instanceof(WebServer)
    });

    after(function() {
      server.close();
    })

  });

});

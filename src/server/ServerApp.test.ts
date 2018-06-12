import { should, expect, use, request } from 'chai';

import ServerApp from './ServerApp';
import Middleware from '../middleware/Middleware';
import { authenticated, reverse, piPower } from '../middleware/Handlers';


describe('Server', function() {

  const port = 3001
  const serverApp = new ServerApp();

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
        done();
      })
    });

    after(function() {
      server.close();
    })

  });

  after(function(done) {
    done();
  });

});

describe('Server With Middlewares', function() {

  describe('Run Server App With Authenticated Middleware', function() {
    const port= 3002;
    const serverMiddlewareApp = new ServerApp();
    serverMiddlewareApp.use(new Middleware(authenticated))

    use(require('chai-http'));
    const server = serverMiddlewareApp.run(port);

    it(`should run on localhost:${port}`, function(done) {
      request(`http://localhost:${port}`)
      .get('/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.be.equal('The user has been authenticated\n');
        done();
      })
    });

    after(function() {
      server.close();
    })

    after(function(done) {
      done();
    });

  });

  describe('Run Server App With Authenticated and Reverse Middleware', function() {
    const port= 3003;
    const serverMiddlewareApp = new ServerApp();
    serverMiddlewareApp.use(new Middleware(authenticated))
    serverMiddlewareApp.use(new Middleware(reverse))

    use(require('chai-http'));
    const server = serverMiddlewareApp.run(port);

    it(`should run on localhost:${port}`, function(done) {
      request(`http://localhost:${port}`)
      .get('/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.be.equal('The user has been authenticated\nReverse of backwards is sdrawkcab\n');
        done();
      })
    });

    after(function() {
      server.close();
    })

    after(function(done) {
      done();
    });

  });

  describe('Run Server App With Authenticated and PiPower but not Reverse Middleware', function() {
    const port= 3004;
    const serverMiddlewareApp = new ServerApp();
    serverMiddlewareApp.use(new Middleware(authenticated))
    serverMiddlewareApp.use(new Middleware(piPower))
    serverMiddlewareApp.use(new Middleware(reverse))

    use(require('chai-http'));
    const server = serverMiddlewareApp.run(port);

    it(`should run on localhost:${port}`, function(done) {
      request(`http://localhost:${port}`)
      .get('/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.be.equal('The user has been authenticated\nPi to power 1=3.141592653589793');
        done();
      })
    });

    after(function() {
      server.close();
    })

    after(function(done) {
      done();
    });

  });

});

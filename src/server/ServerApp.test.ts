import { should, expect, use, request } from 'chai';

import ServerApp from './ServerApp';
import { MiddlewareHandler } from '../middleware/index';

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

  const authenticatedMessage = 'Authenticated\n'
  const authenticatedPipe: MiddlewareHandler = async function random(ctx, next) {
    if (!ctx.body) ctx.body = '';
    ctx.body += authenticatedMessage
    await next();
  };

  const reverseMessage = 'reverse\n'
  const reversePipe: MiddlewareHandler = async function random(ctx, next) {
    if (!ctx.body) ctx.body = '';
    ctx.body += reverseMessage
    await next();
  };

  const piMessage = 'pi\n'
  const piResponse: MiddlewareHandler = async function random(ctx, next) {
    if (!ctx.body) ctx.body = '';
    ctx.body += piMessage
  };
  describe('Run Server App With Authenticated Middleware', function() {
    const port= 3002;
    const serverMiddlewareApp = new ServerApp();
    serverMiddlewareApp.use(authenticatedPipe)

    use(require('chai-http'));
    const server = serverMiddlewareApp.run(port);

    it(`should run on localhost:${port}`, function(done) {
      request(`http://localhost:${port}`)
      .get('/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.be.equal(authenticatedMessage);
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
    serverMiddlewareApp.use(authenticatedPipe)
    serverMiddlewareApp.use(reversePipe)

    use(require('chai-http'));
    const server = serverMiddlewareApp.run(port);

    it(`should run on localhost:${port}`, function(done) {
      request(`http://localhost:${port}`)
      .get('/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.be.equal(authenticatedMessage+reverseMessage);
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
    serverMiddlewareApp.use(authenticatedPipe)
    serverMiddlewareApp.use(piResponse)
    serverMiddlewareApp.use(reversePipe)

    use(require('chai-http'));
    const server = serverMiddlewareApp.run(port);

    it(`should run on localhost:${port}`, function(done) {
      request(`http://localhost:${port}`)
      .get('/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.be.equal(authenticatedMessage+piMessage);
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

import { should, expect } from 'chai';

import ServerApp from './ServerApp';

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

    it('should implement IRunnable', function() {
      expect(serverApp).to.respondsTo('getRunnerHandler')
      const runnableHandler = serverApp.getRunnerHandler();
      expect(runnableHandler).to.be.a('function');
    });

  });

});

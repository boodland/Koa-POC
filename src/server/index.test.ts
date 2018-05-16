import { should } from 'chai'

describe('Index Test', () => {
  it('should pass', (done) => {
    const sum = 1 + 2;
    should().equal(sum, 3);
    should().not.equal(sum, 4);
    done();
  });
});



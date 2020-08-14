import { SalaryPipe } from './salary.pipe';

describe('SalaryPipe', () => {
  it('create an instance', () => {
    const pipe = new SalaryPipe();
    expect(pipe).toBeTruthy();
  });
});

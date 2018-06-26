import { BirthdayModule } from './birthday.module';

describe('BirthdayModule', () => {
  let birthdayModule: BirthdayModule;

  beforeEach(() => {
    birthdayModule = new BirthdayModule();
  });

  it('should create an instance', () => {
    expect(birthdayModule).toBeTruthy();
  });
});

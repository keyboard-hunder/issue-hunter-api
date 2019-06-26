import { Test } from '@nestjs/testing';

import { ProcessEnv } from './ProcessEnv';

describe('ProcessEnv', () => {

  let processEnv: ProcessEnv;

  beforeAll(async () => {
    process.env.STRING = 'string';
    process.env.NUMBER = '1234';
    process.env.BOOLEAN = 'true';

    const module = await Test.createTestingModule({
      providers: [ProcessEnv],
    }).compile();

    processEnv = module.get<ProcessEnv>(ProcessEnv);
  });

  describe('.getString()', () => {

    it('should return string value of key in process.env', () => {
      const result = processEnv.getString('STRING');
      expect(result).toBe('string');
    });

  });

  describe('.getNumber()', () => {

    it('should return number value of key in process.env', () => {
      const result = processEnv.getNumber('NUMBER');
      expect(result).toBe(1234);
    });

  });

  describe('.getBoolean()', () => {

    it('should return boolean value of key in process.env', () => {
      const result = processEnv.getBoolean('BOOLEAN');
      expect(result).toBe(true);
    });

    it('should return boolean value of key in process.env even Uppercase', () => {
      process.env.BOOLEAN = 'TRUE';
      const result = processEnv.getBoolean('BOOLEAN');
      expect(result).toBe(true);
    });

  });

});

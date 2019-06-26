import { Injectable } from '@nestjs/common';

@Injectable()
export class ProcessEnv {

  getString(key: string): string {
    return process.env[key];
  }

  getNumber(key: string): number {
    return parseInt(process.env[key], 10);
  }

  getBoolean(key: string): boolean {
    return process.env[key].toLowerCase() === 'true';
  }

}

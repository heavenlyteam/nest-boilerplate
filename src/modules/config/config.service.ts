import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  readonly config: { [key: string]: string };

  constructor(filePath: string) {
    try {
      this.config = dotenv.parse(fs.readFileSync(filePath));
    } catch {
      this.config = process.env;
    }
  }

  get(key: string) {
    return this.config[key];
  }
}

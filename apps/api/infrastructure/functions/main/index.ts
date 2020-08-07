import { createNestServer } from '../../../src/main.gcp';
import * as express from 'express';

const expressApp = express();
createNestServer(expressApp);

export const handler = expressApp;

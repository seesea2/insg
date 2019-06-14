import * as express from 'express';
import * as session from 'express-session';
import * as https from 'https';
import * as fs from 'fs';
import { join } from 'path';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import { Request, Response, NextFunction } from './interface';
import apiRouter from './api-router';

// Express server
const app = express();
const HOST = 'localhost';
const HTTP_PORT = 80;
const HTTPS_PORT = 443;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'insg-yc-ly-17',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 // millseconds of 24hrs  }
    }
  })
);

app.use('/api', apiRouter);

app.get('/', (req: Request, res: Response) => {
  return res.status(200).sendFile(join(__dirname, '/client/index.html'));
});

// Server static files from /client
app.use(express.static(join(__dirname, '/client')));

// error handling - 1
app.all('/*', (req: Request, res: Response) => {
  return res.status(200).sendFile(join(__dirname, '/client/index.html'));
});
// error handling - 2
app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(500).send('Issue happened. Please retry later!');
});

// Start up the Node server
// http
app.set('domain', HOST);
// app.set('port', HTTP_PORT);
// app.listen(app.get('port'), () => {
  //   console.log(`Node server listening on http://${HOST}:${PORT}`);
  // });

  // https default port
  app.set('port', HTTPS_PORT);
const httpsOptions = {
  cert: fs.readFileSync(join(__dirname, '/cert/insg.crt')),
  key: fs.readFileSync(join(__dirname, '/cert/insg.key'))
};
const server = https.createServer(httpsOptions, app);
server.listen(443);
// export { server };

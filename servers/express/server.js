//import express from 'express';
import bodyParser from 'body-parser';
import jsonwebtoken from 'jsonwebtoken';
import cors from 'cors';
import Config from './config';
import { authenticate, authError } from './middleware';

const { port, secretKey, expiredAfter } = Config;

const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 9000;

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {

	function doesUserExists(username, password) {
		const user = {
			id: 1,
			username: 'demo@gmail.com',
			password: 'demodemo',
		};
		if (username === user.username && password === user.password) {
			return true;
		}
		return false;
	}

  const app = express();

	app
		.use(bodyParser.urlencoded({ extended: true }))
		.use(bodyParser.json())
		.use(cors());

	app.get('/', (req, res) => {
		res.json({ status: 'OK' });
	});

	app.post('/api/login', (req, res) => {
		const { username, password } = req.body;
		const response = {};
		// You can use DB checking here

		if (doesUserExists(username, password)) {
			response.token = jsonwebtoken.sign(
				{
					expiredAt: new Date().getTime() + expiredAfter,
					username,
					id: 1,
				},
				secretKey
			);
		} else {
			response.error = 'Not found';
		}
		res.json(response);
	});
	app.use('/api/secret', [authenticate, authError]);
	app.post('/api/secret/test', (req, res) => {
		res.json({
			status: 200,
			message: 'succcesful',
		});
	});

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../../client/build')));

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Olá"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
}

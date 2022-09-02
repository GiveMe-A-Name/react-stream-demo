// import moduleName from '';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { renderToStream } from 'react-streaming/server';
import express from 'express';
import App from '../src/App';

const app = express();

app.use(express.static('./dist/client'));

app.get('/', async (req, res) => {
  const {
    pipe, // Defined if running in Node.js, otherwise `null`
  } = await renderToStream(<App />, {
    // disable: true,
    userAgent: 'jupiter ssr'
  })
  pipe?.(res);
})

app.listen(8082, () => {
  console.log('http://localhost:8082');
})
import { ReactStreaming } from 'react-streaming/client'
import App from './App';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
// Wrap your root component `<Page>` (aka `<App>`) with `<ReactStreaming>`
const Page = (
  <ReactStreaming>
    <App />
  </ReactStreaming>
)

hydrateRoot(
  document,
  Page,
)
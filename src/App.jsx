import React, { lazy, Suspense } from 'react';

const Body = lazy(() => import('./components/Body'))

const App = () => {
  return <div>
    <h3>hello app</h3>
    <Suspense fallback="body loading">
      <Body />
    </Suspense>
  </div>;
}
export default App;
import React, { Suspense, lazy } from 'react';
import { useAsync } from 'react-streaming';


function mockFetch() {
  console.log('body mockFetch');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('this is body data');
    }, 1000);
  })
}

const Comments = lazy(() => import('./Comments'));

const Body = () => {
  const data = useAsync(async () => {
    return mockFetch();
  })

  return <div>
    <h3>Body</h3>
    <p>body data - {data}</p>
    <Suspense fallback="comment loading">
      <Comments />
    </Suspense>
  </div>
}

export default Body;
import React from 'react';
import { useAsync } from 'react-streaming';

function mockFetch() {
  console.log('comment mockfetch');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('this is Comments data');
    }, 1500);
  })
}

const Comments = () => {
  const data = useAsync(async () => {
    return mockFetch();
  })

  return <div>
    <p>Comments data - {data}</p>
  </div>
}

export default Comments;
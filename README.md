# React Streaming Demo

## install & start

```shell
  pnpm install
  pnpm start
```

## Question

When We use `useAsync` in nested components, The child component must wait for the parent component that complete its fetch, then start fetch data.

```jsx
// Body.jsx (parent component)
const Body = () => {
  const data = useAsync(async () => {
    return mockFetch();
  });

  return (
    <div>
      <h3>Body</h3>
      <p>body data - {data}</p>
      <Suspense fallback="comment loading">
        <Comments />
      </Suspense>
    </div>
  );
};

// Comments.jsx (child component)
const Comments = () => {
  const data = useAsync(async () => {
    return mockFetch();
  });

  return (
    <div>
      <p>Comments data - {data}</p>
    </div>
  );
};
```

We must await for Body to complete its useAsync, then we launch Comment's request.
It's waste many time in serial request, how to parallel request in React Stream SSR?

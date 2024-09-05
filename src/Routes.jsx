import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Login = lazy(() => import('./Components/Login'));
const App = lazy(() => import('./App'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      { path: '', index: true, element: <App /> }, 
    ],
  },
  {
    path: 'login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;

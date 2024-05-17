import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/Home';
import LoginPage from './pages/login';
import BookPage from './pages/BookPage';
import RegisterBooks from './pages/RegisterBooks';
import RegisterAuthors from './pages/RegisterAuthors';
import RegisterPublishers from './pages/RegisterPublishers';
import TestComponents from './pages/TestComponents';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <BookPage />,
      },
      {
        path: "register-book",
        element: <RegisterBooks />,
      },
      {
        path: "register-Publisher",
        element: <RegisterPublishers />,
      },
      {
        path: "register-author",
        element: <RegisterAuthors />,
      },
      {
        path: "teste",
        element: <TestComponents />
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/cadastro",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './meyer.css';
import './index.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Product from './components/Product';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

const router =
  createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={
          <Layout />
        }
      >
        <Route
          index
          element={
            <Home />
          }
        />
        <Route
          path='catalog'
          element={
            <Catalog />
          }
        />
        <Route
          path='catalog/:id'
          element={
            <Product />
          }
        />
        <Route
          path='cart'
          element={
            <Cart />
          }
        />
        <Route
          path='*'
          element={
            <NotFound />
          }
        />
      </Route>
    ),
    {
      basename:
        '/TOP_ShoppingCart_ReactRouter',
    }
  );

function App() {
  return (
    <RouterProvider
      router={
        routser
      }
    ></RouterProvider>
  );
}

export default App;

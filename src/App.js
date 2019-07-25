import '../node_modules/bootstrap/scss/bootstrap.scss';
import './scss/app.scss';
import React from 'react';
import Header from './components/Header/Header'
import Login from './views/Login'
import { Formik, Field } from 'formik';

function App(props) {

  return (
    <div className="appFaculdade">
      <Header />

      <main className="main d-inline-flex w-100 justify-content-center align-items-center">
        <Login />
      </main>
    </div>
  );
}

export default App;

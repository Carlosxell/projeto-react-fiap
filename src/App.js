import '../node_modules/bootstrap/scss/bootstrap.scss';
import './scss/app.scss';
import React from 'react';
import Header from './components/Header/Header'
import Login from './views/Login'
import CadastroCliente from './views/CadastroCliente'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App(props) {
  return (
    <div className="appFaculdade">
      <Header />

      <main className="main d-inline-flex w-100 justify-content-center align-items-center">
        <BrowserRouter>
          <Switch>
            <Route component={ Login } exact path={ '/' } />
            <Route component={ CadastroCliente } exact path={ '/cadastrar-cliente' } />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

import '../node_modules/bootstrap/scss/bootstrap.scss';
import './scss/app.scss';
import React from 'react';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="appFaculdade">
      <Header />

      <main className="main d-inline-flex w-100 justify-content-center align-items-center">
        <form action="GET" autoComplete="off" className="formContent row" noValidate>
          <div className="col-12">
            <div className="form-group">
              <label className="" htmlFor="email">E-mail</label>
              <input className="form-control form-control-sm" type="text" id="email"
                     placeholder="Ex: jose.teste@gmail.com" />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <label className="" htmlFor="password">Senha</label>
              <input className="form-control form-control-sm" type="password" id="password" placeholder="* * * * * *" />
            </div>
          </div>

          <div className="col-12">
            <div className="row no-gutters justify-content-end">
              <div className="d-inline-block">
                <a className="btn btn-sm btn-link">Cadastrar</a>
              </div>

              <div className="d-inline-block ml-1">
                <button className="btn btn-sm btn-primary" type="submit">Entrar</button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;

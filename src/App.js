import '../node_modules/bootstrap/scss/bootstrap.scss';
import './scss/app.scss';
import React from 'react';
import Header from './components/Header/Header'
import { Formik, Field } from 'formik';

const initState = {
  email: "",
  password: ""
};

function App(props) {
  let onSubmit = async (e) => {
    console.info(e, 'deu certo');
  };

  return (
    <div className="appFaculdade">
      <Header />

      <main className="main d-inline-flex w-100 justify-content-center align-items-center">
        <Formik className='formContent' initialValues={ initState } onSubmit={ onSubmit }>
          { props => (
            <form action="GET" autoComplete="off" className="row" noValidate onSubmit={ props.handleSubmit }>
              <div className="col-12">
                <div className="form-group">
                  <label className="" htmlFor="email">E-mail</label>
                  <Field onChange={ props.handleChange }
                         className="form-control form-control-sm"
                         id="email"
                         placeholder="Ex: jose.teste@gmail.com"
                         type="text"
                         value={ props.values.email } />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label className="" htmlFor="password">Senha</label>
                  <Field onChange={ props.handleChange }
                         className="form-control form-control-sm"
                         type="password"
                         id="password"
                         placeholder="* * * * * *"
                         value={ props.values.password } />
                </div>
              </div>

              <div className="col-12">
                <div className="row no-gutters justify-content-end">
                  <div className="d-inline-block">
                    <a className="btn btn-sm btn-link">Cadastrar</a>
                  </div>

                  <div className="d-inline-block ml-1">
                    <button className="btn btn-sm btn-primary" type="submit" disabled={!props.dirty && !props.isSubmitting}>Entrar</button>
                  </div>
                </div>
              </div>
            </form>
          ) }
        </Formik>
      </main>
    </div>
  );
}

export default App;

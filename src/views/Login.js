import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import { validationSchema } from '../helpers/validation'
let yup = require('yup');

const initState = {
  email: "",
  password: ""
};

function Login(props) {
  let onSubmit = async (e, errors) => { console.info(errors.setErrors, 'deu certo'); };

  return (
    <Formik initialValues={ initState } onSubmit={ onSubmit } validationSchema={ validationSchema }>
      { props => (
        <form action="GET" autoComplete="off" className="formContent row" noValidate onSubmit={ props.handleSubmit }>
          <div className="col-12">
            <div className="form-group">
              <label className="" htmlFor="email">E-mail</label>
              <Field onChange={ props.handleChange }
                     className={`form-control form-control-sm ${ props.errors.email ? 'is-invalid' : ''}`}
                     id="email"
                     placeholder="Ex: jose.teste@gmail.com"
                     type="text"
                     value={ props.values.email } />
               <small className="invalid-feedback">{ props.errors.email }</small>
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <label className="" htmlFor="password">Senha</label>
              <Field onChange={ props.handleChange }
                     className={`form-control form-control-sm ${ props.errors.password ? 'is-invalid' : ''}`}
                     minLength="6"
                     type="password"
                     id="password"
                     placeholder="* * * * * *"
                     value={ props.values.password } />
              <small className="invalid-feedback">{ props.errors.password }</small>
            </div>
          </div>

          <div className="col-12">
            <div className="row no-gutters justify-content-end">
              <div className="d-inline-block">
                <a className="btn btn-sm btn-link">Cadastrar</a>
              </div>

              <div className="d-inline-block ml-1">
                <button className="btn btn-sm btn-primary" type="submit" disabled={ !props.isValid }>Entrar</button>
              </div>
            </div>
          </div>
        </form>
      ) }
    </Formik>
  );
}

export default Login;

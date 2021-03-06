import React, { Component, useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { loginSchema } from '../helpers/validation';
import { Link } from "react-router-dom";

const initState = {
  email: "",
  password: ""
};

function Login(props) {
  let onSubmit = async (e) => {
    console.info(e, 'deu certo');
    return props.history.push(`/dashboard`);
  };

  return (
    <Formik initialValues={ initState } onSubmit={ onSubmit } validationSchema={ loginSchema }>
      { props => (
        <form action="GET" autoComplete="off" className="formContent" noValidate onSubmit={ props.handleSubmit }>
          <div className="row">
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
                  <Link className="btn btn-sm btn-link" to={ '/cadastrar-cliente' }>Cadastrar</Link>
                </div>

                <div className="d-inline-block ml-1">
                  <button className="btn btn-sm btn-primary" type="submit" disabled={ !props.isValid }>Entrar</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) }
    </Formik>
  );
}

export default Login;

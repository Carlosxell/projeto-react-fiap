import React, { Component, useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { validationSchema } from '../helpers/validation';
import { Link } from "react-router-dom";

const initState = {
  cpf: "",
  name: "",
  email: "",
  password: "",
  checkPassword: "",
};

function CadastroCliente(props) {
  let onSubmit = async (e, errors) => {
    console.info(e, 'deu certo');
    return props.history.push(`/dashboard`);
  };

  return (
    <Formik initialValues={ initState } onSubmit={ onSubmit } validationSchema={ validationSchema }>
      { props => (
        <form action="GET" autoComplete="off" className="formContent" noValidate onSubmit={ props.handleSubmit }>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label className="" htmlFor="name">Nome</label>
                <Field onChange={ props.handleChange }
                       className={`form-control form-control-sm ${ props.errors.name ? 'is-invalid' : ''}`}
                       id="name"
                       name="name"
                       placeholder="Ex: José da Silva"
                       type="text"
                       value={ props.values.name } />
                <small className="invalid-feedback">{ props.errors.name }</small>
              </div>
            </div>

            <div className="col-12 col-sm-4">
              <div className="form-group">
                <label className="" htmlFor="cpf">CPF</label>
                <Field onChange={ props.handleChange }
                       className={`form-control form-control-sm ${ props.errors.cpf ? 'is-invalid' : ''}`}
                       id="cpf"
                       maxLength="14"
                       name="cpf"
                       placeholder="000.000.000-00"
                       type="text"
                       value={ props.values.cpf } />
                <small className="invalid-feedback">{ props.errors.cpf }</small>
              </div>
            </div>

            <div className="col-12 col-sm-4">
              <div className="form-group">
                <label className="" htmlFor="telefone">Telefone</label>
                <input className="form-control form-control-sm" type="text" id="telefone" placeholder="(00) 00000-0000"/>
              </div>
            </div>

            <div className="col-12 col-sm-4">
              <div className="form-group">
                <label className="" htmlFor="email">E-mail</label>
                <Field onChange={ props.handleChange }
                       className={`form-control form-control-sm ${ props.errors.email ? 'is-invalid' : ''}`}
                       id="email"
                       name="email"
                       placeholder="Ex: jose.teste@gmail.com"
                       type="text"
                       value={ props.values.email } />
                <small className="invalid-feedback">{ props.errors.email }</small>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="form-group">
                <label className="" htmlFor="password">Senha</label>
                <Field onChange={ props.handleChange }
                       className={`form-control form-control-sm ${ props.errors.password ? 'is-invalid' : ''}`}
                       id="password"
                       name="password"
                       placeholder="* * * * * *"
                       type="password"
                       value={ props.values.password } />
                <small className="invalid-feedback">{ props.errors.password }</small>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="form-group">
                <label className="" htmlFor="checkPassword">Confirme a Senha</label>
                <Field onChange={ props.handleChange }
                       className={`form-control form-control-sm ${ props.errors.checkPassword ? 'is-invalid' : ''}`}
                       id="checkPassword"
                       name="checkPassword"
                       placeholder="* * * * * *"
                       type="password"
                       value={ props.values.checkPassword } />
                <small className="invalid-feedback">{ props.errors.checkPassword }</small>
              </div>
            </div>

            <div className="col-12">
              <div className="row no-gutters justify-content-end">
                <div className="d-inline-block">
                  <Link className="btn btn-sm btn-link mr-1" to={ '/' }>Voltar</Link>
                </div>

                <div className="d-inline-block">
                  <button className="btn btn-sm btn-primary" disabled={ !props.isValid } type="submit">Enviar Cadastro</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) }
    </Formik>
  );
}

export default CadastroCliente;

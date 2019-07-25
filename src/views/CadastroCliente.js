import React, { Component, useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { validationSchema } from '../helpers/validation';
import { Link } from "react-router-dom";

const initState = {
  email: "",
  password: ""
};

function CadastroCliente(props) {
  let onSubmit = async (e, errors) => { console.info(errors.setErrors, 'deu certo'); };

  return (
    <Formik initialValues={ initState } onSubmit={ onSubmit } validationSchema={ validationSchema }>
      <form action="GET" autoComplete="off" className="formContent" noValidate>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label className="" htmlFor="nome">Nome</label>
              <input className="form-control form-control-sm" type="text" id="nome" placeholder="Ex: José da Silva"/>
            </div>
          </div>

          <div className="col-12 col-sm-4">
            <div className="form-group">
              <label className="" htmlFor="cpf">CPF</label>
              <input className="form-control form-control-sm" type="text" id="cpf" placeholder="000.000.000-00"/>
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
              <input className="form-control form-control-sm" type="text" id="email"
                     placeholder="Ex: jose.teste@gmail.com"/>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label className="" htmlFor="password">Senha</label>
              <input className="form-control form-control-sm" type="password" id="password" placeholder="* * * * * *"/>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label className="" htmlFor="confirmePassword">Confirme a Senha</label>
              <input className="form-control form-control-sm" type="password" id="confirmePassword"
                     placeholder="* * * * * *"/>
            </div>
          </div>

          <div className="col-12">
            <div className="row no-gutters justify-content-end">
              <div className="d-inline-block">
                <Link className="btn btn-sm btn-outline-secondary mr-1" to={ '/' }>Voltar</Link>
              </div>

              <div className="d-inline-block">
                <a className="btn btn-sm btn-primary" href="../views/dashboard.html">Enviar Cadastro</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Formik>
  );
}

export default CadastroCliente;

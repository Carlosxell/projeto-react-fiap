import React, { Component, useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { pressaoSchema } from '../helpers/validation';
import { Link } from "react-router-dom";

const initState = {
  pressaoArterial: "12/8",
};

function Dashboard(props) {
  let onSubmit = async (e) => {
    console.info(e, 'deu certo');
  };

  return (
    <div className="formContent">
      <header className="d-flex justify-content-between">
        { props => (
          <Formik initialValues={ initState } onSubmit={ onSubmit } validationSchema={ pressaoSchema }>
            <form action="POST" autoComplete="off" className="form-inline" noValidate onSubmit={ props.handleSubmit }>
              <label className="mr-2 mb-2" htmlFor="pressao">Pressão arterial</label>
              <Field onChange={ props.handleChange }
                     className={`form-control form-control-sm ${ props.errors.pressaoArterial ? 'is-invalid' : ''}`}
                     id="pressaoArterial"
                     maxLength="5"
                     minLength="3"
                     name="pressaoArterial"
                     placeholder="00/00"
                     type="text"
                     value={ props.values.pressaoArterial } />
              <small className="invalid-feedback">{ props.errors.pressaoArterial }</small>
              <button className="btn btn-primary btn-sm mb-2" disabled={ !props.isValid } type="submit">Atualizar</button>
            </form>
          </Formik>
        ) }
      </header>

      <div className="table-responsive">
        <table className="table table-striped table-sm mb-5">
          <caption>Listagem de Refeições</caption>
          <thead className="thead-dark">
          <tr>
            <th scope="col">Horário</th>
            <th scope="col">Refeição</th>
            <th scope="col">Alimentos</th>
            <th scope="col">Calorias</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>12/05/2019 ás 08:01</td>
            <td>Café da manhã</td>
            <td>Metade de um mamão, uma banana e uma torrada.</td>
            <td>500cal</td>
          </tr>
          <tr>
            <td>12/05/2019 ás 13:00</td>
            <td>Almoço</td>
            <td>3 colheres de sopa Arroz integral, 2 colheres de sopa de feijão, um bife (150g)</td>
            <td>366cal</td>
          </tr>
          <tr>
            <td>12/05/2019 ás 16:h0</td>
            <td>Lanche</td>
            <td>2 peras</td>
            <td>366cal</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm mb-5">
          <caption>Lista de atividades</caption>
          <thead className="thead-dark">
          <tr>
            <th scope="col">Atividade</th>
            <th scope="col">Tempo</th>
            <th scope="col">Calorias gastas</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>Esteira</td>
            <td>30 minutos</td>
            <td>300 cal</td>
          </tr>
          <tr>
            <td>Treino Funcional</td>
            <td>45 minutos</td>
            <td>220 cal</td>
          </tr>
          <tr>
            <td>Boxe</td>
            <td>1:30 minutos</td>
            <td>460 cal</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className="row no-gutters justify-content-end">
        <div className="d-inline-block">
          <Link className="btn btn-sm btn-primary" to={ '/cadastrar-cliente' }>Novo cliente</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

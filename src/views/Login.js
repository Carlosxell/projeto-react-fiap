import { React } from 'react';
import { Formik, Field } from 'formik';

const initState = {
  email: "",
  password: ""
};

function Login(props) {
  let onSubmit = async (e) => {
    console.info(e, 'deu certo');
  };

  return (
    <Formik className='formContent' initialValues={ initState } onSubmit={ onSubmit }>
      { props => (
      <form action="GET" autoComplete="off" className="row" noValidate onSubmit={ props.handleSubmit }></form>
      ) }
    </Formik>
  );
}

export default Login;
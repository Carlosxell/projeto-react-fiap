let yup = require('yup');

export const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail não é válido!').required('E-mail é um Campo Obrigatório!'),
  password: yup.string().min(6, 'A senha deve ter ao menos 6 caracteres!').required('Campo Senha é Obrigatório!')
});

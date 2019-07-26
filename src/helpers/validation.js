let yup = require('yup');

export const validationSchema = yup.object().shape({
  cpf: yup.string().required('CPF é um campo obrigatório!').min(14, `O campo CPF deve ter 14 caracteres com números, '.' e '-'.`),
  name: yup.string().required('Nome é um campo obrigatório!'),
  email: yup.string().email('E-mail não é válido!').required('E-mail é um campo obrigatório!'),
  password: yup.string().min(6, 'A senha deve ter ao menos 6 caracteres!').required('campo senha é obrigatório!'),
  checkPassword: yup.string().min(6, 'A confirmação de senha deve ter ao menos 6 caracteres!').required('A confirmação de senha é obrigatório!'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('E-mail não é válido!').required('E-mail é um campo obrigatório!'),
  password: yup.string().min(6, 'A senha deve ter ao menos 6 caracteres!').required('campo senha é obrigatório!'),
});

export const pressaoSchema = yup.object().shape({
  pressaoArterial: yup.string().min(3, 'A Pressão arterial deve ter ao menos 3 caracteres!').max(5, 'A Pressão arterial deve ter máximo de 5 caracteres!').required('Pressão arterial é um campo obrigatório!'),
});

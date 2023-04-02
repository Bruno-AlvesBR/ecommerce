import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { ISigninFormData } from '@/presentation/pages/authentication/signin';

import { Container, Content, Title, Button, Link } from '../styles';

interface ISignin {
  onSubmit(data: ISigninFormData): void;
  field: {
    isError: boolean;
    errorText: string;
  };
  form: {
    isLoading: boolean;
  };
}

const Signin: React.FC<ISignin> = ({ onSubmit, form }) => {
  const validationForm = object({
    email: string()
      .required('Campo de email obrigatório!')
      .email('Email inválido'),
    password: string().required('Campo de senha obrigatório!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationForm),
  });

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title variant="h1">Logar</Title>

      <Content>
        <TextField
          name="email"
          {...register('email')}
          type="email"
          label={errors.email?.message.toString() || 'Email'}
          placeholder="Insira seu email"
          error={!!errors?.email?.message}
          fullWidth
        />
        <TextField
          name="password"
          {...register('password')}
          type="password"
          label={errors.password?.message.toString() || 'Senha'}
          placeholder="Insira sua senha"
          error={!!errors.password?.message}
          fullWidth
        />
      </Content>

      <Link href="/autenticacao/registrar">
        Não tem conta? Clique aqui
      </Link>

      <Button type="submit" disabled={form.isLoading} fullWidth>
        ENTRAR
      </Button>
    </Container>
  );
};

export { Signin };

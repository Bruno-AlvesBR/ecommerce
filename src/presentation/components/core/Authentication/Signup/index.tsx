import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { ISignupFormData } from '@/presentation/pages/authentication/signup';

import { Container, Content, Title, Button, Link } from '../styles';
import { ContentWrapperFields } from './styles';

interface ISignup {
  onSubmit(data: ISignupFormData): void;
  field: {
    isError: boolean;
    errorText: string;
  };
  form: {
    isLoading: boolean;
  };
}

const Signup: React.FC<ISignup> = ({ onSubmit, field, form }) => {
  const validationForm = object({
    email: string()
      .required('Campo de email obrigatório!')
      .email('Email inválido'),
    firstName: string().required('Campo obrigatório!'),
    lastName: string().required('Campo obrigatório!'),
    password: string().required('Campo de senha obrigatório!'),
    confirmPassword: string().required(
      'Campo de confirmar senha obrigatório!',
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationForm),
  });

  const errorTextPass = (fieldType: string) =>
    field?.errorText || errors[fieldType]?.message.toString();

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title variant="h1">Registrar</Title>

      <Content>
        <ContentWrapperFields>
          <TextField
            name="firstName"
            {...register('firstName')}
            label={
              errors?.firstName?.message.toString() || 'Primeiro nome'
            }
            error={!!errors?.firstName?.message}
            placeholder="Primeiro nome"
            fullWidth
          />
          <TextField
            name="lastName"
            {...register('lastName')}
            label={
              errors?.lastName?.message.toString() || 'Último nome'
            }
            error={!!errors?.lastName?.message}
            placeholder="Último nome"
            fullWidth
          />
        </ContentWrapperFields>

        <TextField
          name="email"
          {...register('email')}
          type="email"
          label={errors?.email?.message.toString() || 'Email'}
          error={!!errors?.email?.message}
          placeholder="Email"
          fullWidth
        />
        <TextField
          name="password"
          {...register('password')}
          label={errorTextPass('password') || 'Senha'}
          error={field?.isError || !!errors?.password?.message}
          type="password"
          placeholder="Senha"
          fullWidth
        />
        <TextField
          {...register('confirmPassword')}
          label={
            errorTextPass('confirmPassword') || 'Confirmar senha'
          }
          error={field?.isError || !!errors?.confirmPassword?.message}
          type="password"
          placeholder="Confirmar senha"
          fullWidth
        />
      </Content>

      <Link href="/autenticacao/logar">
        Já tem conta? Clique aqui
      </Link>

      <Button type="submit" disabled={form?.isLoading} fullWidth>
        CADASTRAR
      </Button>
    </Container>
  );
};

export { Signup };

import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import { ISigninFormData } from '@/presentation/pages/authentication/signin';
import { Link } from '@/presentation/components/ui/Link';
import { Button } from '../../Button';

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sm:p-8 sm:w-full flex flex-col justify-center items-left relative w-[500px] max-w-[500px] gap-8 bg-white1000 p-16 rounded-[6px] shadow-gray400"
    >
      <h1 className="text-8 font-bold text-center">Logar</h1>

      <div className="flex flex-col justify-center items-center relative w-full gap-4">
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
      </div>

      <Link className="text-blue700" href="/autenticacao/registrar">
        Não tem conta? Clique aqui
      </Link>

      <Button type="submit" disabled={form.isLoading} fullWidth>
        ENTRAR
      </Button>
    </form>
  );
};

export { Signin };

import React from 'react';
import { MdEmail, MdLock, MdAccountCircle } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Column, TitleLogin, SubtitleLogin, Wrapper, Row } from './styles';

const Register = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const onSubmit = async (formData) => {
    try {
      const response = await api.post('/register', formData);

      if (response.status === 201) {
        navigate('/login');
      } else {
        console.error('Erro ao criar a conta:', response.data);
      }
    } catch (e) {
      console.error('Erro ao criar a conta:', e);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Crie sua conta</TitleLogin>
            <SubtitleLogin>Faça seu registro e faça a diferença.</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder="Nome Completo" leftIcon={<MdAccountCircle />} name="fullName" control={control} />
              {errors.fullName && <span>Nome Completo é obrigatório</span>}

              <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
              {errors.email && <span>E-mail é obrigatório</span>}

              <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
              {errors.senha && <span>Senha é obrigatória</span>}

              <Button title="Registrar" variant="secondary" type="submit" />
            </form>
            <Row>  
            A clicar em "Criar minha conta", aceito as Políticas de Privacidade e os termos .
            </Row>
            <Row>
              Já tem uma conta? <span  onClick={() => navigate('/login')}style={{ color: 'green' }}>Clique aqui</span>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };

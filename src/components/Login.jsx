import { useState } from 'react'; // Importa o hook useState do React
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import { Navigate, UNSAFE_ErrorResponseImpl } from 'react-router-dom';

// Define o estilo do container principal do login
const LoginContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial;
 
  #Login {
    align-items: center;
  }
 
`;


// Define o estilo do formulário de login
const LoginForm = styled.form`
display: flex;
padding: 40px;
 flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
 
`;
// Define o estilo do campo de entrada
const Input = styled.input`
  margin-bottom: 40px;
  margin-top: 10px;
  padding:  0 5px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #e1e1e1;
  outline: none;
    width: 200px;
`;
// Define o estilo do botão
const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Componente principal de Login
// eslint-disable-next-line react/prop-types
const Login = ({ onLogin }) => {
  const [CPF, setCPF] = useState(''); // Define o estado para o nome de usuário
  const [Senha, setSenha] = useState(''); // Define o estado para a senha

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if ( CPF === 'cpf' && Senha === 'senha') {
      onLogin(); // Chama a função onLogin passada como prop se as credenciais estiverem corretas
    } else {
      alert('Invalid credentials'); // Exibe um alerta se as credenciais estiverem incorretas
    }
    if (redirect) {
      return <Navigate to='/perfil' />;
  }

  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="text"
          value={CPF} // Valor do campo de entrada é ligado ao estado username
          onChange={(e) => setCPF(e.target.value)} // Atualiza o estado username conforme o usuário digita
          placeholder="CPF" // Placeholder do campo de entrada
        //  className={`inputForm ${errors.CPF ? 'erro' : ''}`}
          id='CPF'
          name='CPF'
         //onChange={handleChange}
        />
        <Input
          type="senha"
          value={Senha} // Valor do campo de entrada é ligado ao estado password
         onChange={(e) => setSenha(e.target.value)} // Atualiza o estado password conforme o usuário digita
          placeholder="Senha" // Placeholder do campo de entrada
        ///  className= { ` inputForm ${errors.senha ? 'erro': ''}`}
          name="senha"
          id="senha"
         //onChange={handleChange}
        />
        <Button type="submit">Acessar</Button> {/* Botão que envia o formulário */}
      </LoginForm>
    </LoginContainer>
  );
};

export default Login; // Exporta o componente Login como padrão

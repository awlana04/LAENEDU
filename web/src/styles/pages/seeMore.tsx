import styled from 'styled-components';

interface ActiveItemInterface {
  isActive: boolean;
};

export const ContainerHome = styled.div`
  height: 100vh;
  display: flex;
  
  background: #FF8D27;
`;

export const LogoContent = styled.div`
  margin-left: 15vw;
  display: flex;

  img {
    margin: auto 0;
  };
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;

  background: #373636;
  color: #fff;      

  form {
    margin: auto;
    display: flex;
    flex-direction: column;

    span {
      margin-left: 10px;      
    };

    input {
      height: 40px;
      margin: 10px;
      padding: 20px;

      border-radius: 25px;
      border: transparent;
    };

    button {
      width: 250px;
      height: 40px;
      margin-top: 30px;
      margin: 20px auto;      

      background: #FF8D27;
      border: transparent;
      border-radius: 8px;
    };
  };
`;

export const ButtonToNext = styled.button`
  width: 50px;
  height: 50px;

  margin-top: auto;
  margin-left: auto;
  margin-right: 30px;
  margin-bottom: 10px;

  background: #FF8D27;
  border-radius: 100%;
  border: transparent;

  transition: 0.5s;

  span {
    color: #fff;
    font-size: 32px;
  };

  &:hover {
    background: #DF6900;
  };
`;

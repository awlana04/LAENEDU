import styled from 'styled-components';

interface ActiveItemInterface {
  isActive: boolean;
};

export const ContainerHome = styled.div`
  display: flex;
  height: 100vh;

  background: #FF8D27;
`;

export const LogoContent = styled.div`
  margin-left: 15vw;
  display: flex;
  
  img {
    margin: auto 0;
  };
`;

export const Messages = styled.div`
  width: 100%;

  background: #373636;
  color: #fff;

  display: flex;
`;

export const ContentMessages = styled.div`
  width: 250px;
  margin: auto 0;
  margin-left: 100px;

  h1 {
    font-weight: 700;
  }

  p {
    height: 150px;
    margin-top: 16px;
  }
`;

export const Navigation = styled.div`
  margin-top: auto;

  display: flex;
  flex-direction: row;
`;

export const OptionCircle = styled.div<ActiveItemInterface>`
  width: 20px;
  height: 20px;
  margin: 10px;

  background: white;
  cursor: pointer;
  border-radius: 100%;
  box-shadow: ${props => props.isActive ? '0px 0px 0px 6px #696666' : '0px'};

  transition: 0.4s;

  &:hover {
    box-shadow: 0px 0px 0px 6px #696666;
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

import styled from 'styled-components';

export const Content = styled.div`
  height: 100vh;
  padding: 0 20vw;

  background: #373636; 

  h1 {
    color: #FFF;
  };

  h2 {
    margin: 15px;
    font-size: 32px;
  };
`

export const ListCards = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContListCardsent = styled.div``;

export const Card = styled.div`
  padding: 20px;
  margin-top: 25px;

  background: #fff;
  border-radius: 15px;
  box-shadow: 1px 1px 1px;
  
  display: flex;
  flex-direction: row;
`;

export const ContentImages = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100px;
    height: 100px;
  };
`;

export const ContentText = styled.div``;

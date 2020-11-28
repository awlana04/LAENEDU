import React from 'react';
import Header from '../components/Header';

import img1 from '../images/img1.png';
import img2 from '../images/img2.png';

import {Card, Content, ContentImages, ContentText, ListCards} from '../styles/pages/viewContent';

const ViewContent: React.FC  = () => {
  return (
    <>
      <Header></Header>
      
      <Content>
        <h1>Programação</h1>
          <ListCards>
            <Card>
              <ContentImages>
                <img src={img1} alt="img1"></img>
                <img src={img2} alt="img2"></img>
              </ContentImages>

              <ContentText>
                <h2>Everis FullStack Developer</h2>

                <p>Aprenda as tecnologias utilizadas pela everis no desenvolvimento de projetos inovadores ao redor do mundo para conquistar oportunidades e acelerar a sua carreira em desenvolvimento de software nesta gigante de tecnologia.</p>
              </ContentText>   
            </Card>
            </ListCards>
        </Content>
    </>
  )
};

export default ViewContent;

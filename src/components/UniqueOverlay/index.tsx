import React from 'react';
import { Container, Header, Footer, Logo, Burguer, Links } from './styles';
import useWrapperScroll from '../Model/UseWrapperScroll';
import { useTransform } from 'framer-motion';


const UniqueOverlay = () => {
  const { scrollYProgress } = useWrapperScroll();
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Links>
          <ul>
            <li><a href="#">Vehicles</a></li>
            <li><a href="#">Energy</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </Links>
        {/* <Burguer /> */}
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with 💜</a>
          </li>
          <li>
            <a href="#">by Leirbaggr</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default UniqueOverlay;

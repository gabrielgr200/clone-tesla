import React, { ReactNode, useRef } from 'react';
import { Container } from './styles';

interface ModelsWrapper {
  children: ReactNode;
}

const ModelsWrapper: React.FC<ModelsWrapper> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  return (
    <Container ref={wrapperRef}>
      {children}
    </Container>
  );
}

export default ModelsWrapper;
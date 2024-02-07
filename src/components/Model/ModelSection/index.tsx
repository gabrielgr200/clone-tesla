import React, { ReactNode } from 'react';
import { Container } from './styles';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  modelName: string,
  overlayNode: ReactNode,
}

const  ModelSection: React.FC<Props> = ({ modelName, overlayNode, children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}

export default ModelSection;

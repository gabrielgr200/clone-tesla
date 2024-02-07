import React from 'react';
import { Container } from './styles';
import { ModelSection, ModelsWrapper } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';



const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className='colored'
              modelName={modelName}
              overlayNode={<DefaultOverlayContent
                label={modelName}
                description='Order Online for Delivery'
              />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;
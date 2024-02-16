import React from 'react';
import { Container } from './styles';
import { ModelSection, ModelsWrapper } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';


const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model Y',
            'Powerwall',
            'Brand New Model 3',
            'Model X',
            'Model S',
            'Model Solar Panels',
            'Model Solar Roof',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className='colored'
              modelName={modelName}
              overlayNode={<DefaultOverlayContent
                label={modelName}
                description='Lease starting at $329'
              />
              }
            />
          ))}
        </div>

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
}

export default Page;
import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

import { Entry } from '../types';

const HospitalCheckEntry: React.FC<{ entry: Entry }> = ({ entry }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{entry.date}</Card.Header>

        <Card.Description>{entry.description}</Card.Description>
        <Icon name='heart' />
      </Card.Content>
    </Card>
  );
};

export default HospitalCheckEntry;

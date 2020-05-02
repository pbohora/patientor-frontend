import React from 'react';
import { Card } from 'semantic-ui-react';

import { Entry } from '../types';

const HospitalEntry: React.FC<{ entry: Entry }> = ({ entry }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{entry.date}</Card.Header>

        <Card.Description>{entry.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default HospitalEntry;

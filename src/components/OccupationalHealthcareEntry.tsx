import React from 'react';
import { Card } from 'semantic-ui-react';

import { Entry } from '../types';

const OccupationalHealthcareEntry: React.FC<{ entry: Entry }> = ({ entry }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{entry.date}</Card.Header>
        <Card.Meta>{entry.sickLeave}</Card.Meta>
        <Card.Description>{entry.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default OccupationalHealthcareEntry;

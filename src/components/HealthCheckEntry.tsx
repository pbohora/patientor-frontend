import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

import { HealthCheckEntry } from '../types';

import DiagnosisComponent from './Diagnosis';

const HealthCheck: React.FC<{ entry: HealthCheckEntry }> = ({ entry }) => {
  return (
    <Segment raised>
      <h1>
        {entry.date} <Icon name='user md' />
      </h1>
      {entry.diagnosisCodes && (
        <DiagnosisComponent diagnosisCodes={entry.diagnosisCodes} />
      )}

      <p>{entry.description}</p>
      {entry.healthCheckRating === 0 && <Icon name='heart' color='green' />}
      {entry.healthCheckRating === 1 && <Icon name='heart' color='yellow' />}
      {entry.healthCheckRating === 2 && <Icon name='heart' color='orange' />}
      {entry.healthCheckRating === 3 && <Icon name='heart' color='red' />}
    </Segment>
  );
};

export default HealthCheck;

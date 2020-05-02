import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

import { HealthCheckEntry, Diagnosis } from '../types';
import { useStateValue } from '../state';

const HealthCheck: React.FC<{ entry: HealthCheckEntry }> = ({ entry }) => {
  const [{ diagnosisList }] = useStateValue();
  return (
    <Segment raised>
      <h1>
        {entry.date} <Icon name='user md' />
      </h1>
      {entry.diagnosisCodes && (
        <div>
          <h3>Diagnosis</h3>
          <ul>
            {entry.diagnosisCodes.map((diagnosisCode: string) => {
              const diagnosis = Object.values(diagnosisList).find(
                (diagnosis: Diagnosis) => diagnosis.code === diagnosisCode
              );
              return (
                <li key={diagnosisCode}>
                  {diagnosisCode} {diagnosis && diagnosis.name}
                </li>
              );
            })}{' '}
          </ul>
        </div>
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

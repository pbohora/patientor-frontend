import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

import { OccupationalHealthcareEntry, Diagnosis } from '../types';
import { useStateValue } from '../state';

const OccupationalHealthcare: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => {
  const [{ diagnosisList }] = useStateValue();
  return (
    <Segment raised>
      <h1>
        {entry.date} <Icon name='stethoscope' /> {entry.employerName}
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

      {entry.sickLeave && (
        <p>
          <strong>Sick Leave:</strong> {entry.sickLeave.startDate} -
          {entry.sickLeave.endDate}
        </p>
      )}
      <p>{entry.description}</p>
    </Segment>
  );
};

export default OccupationalHealthcare;

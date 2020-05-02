import React from 'react';
import { Segment } from 'semantic-ui-react';

import { HospitalEntry, Diagnosis } from '../types';
import { useStateValue } from '../state';

const Hospital: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  const [{ diagnosisList }] = useStateValue();
  return (
    <Segment raised>
      <h1>{entry.date}</h1>

      <p>{entry.description}</p>

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

      <p>
        Discharge Date: {entry.discharge.date} Criteria:{' '}
        {entry.discharge.criteria}
      </p>
    </Segment>
  );
};

export default Hospital;

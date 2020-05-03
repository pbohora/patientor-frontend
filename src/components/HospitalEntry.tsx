import React from 'react';
import { Segment } from 'semantic-ui-react';

import { HospitalEntry } from '../types';

import DiagnosisComponent from './Diagnosis';

const Hospital: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  return (
    <Segment raised>
      <h1>{entry.date}</h1>

      <p>{entry.description}</p>

      {entry.diagnosisCodes && (
        <DiagnosisComponent diagnosisCodes={entry.diagnosisCodes} />
      )}

      <p>
        Discharge Date: {entry.discharge.date} Criteria:{' '}
        {entry.discharge.criteria}
      </p>
    </Segment>
  );
};

export default Hospital;

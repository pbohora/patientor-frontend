import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

import { OccupationalHealthcareEntry } from '../types';
import DiagnosisComponent from './Diagnosis';

const OccupationalHealthcare: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => {
  return (
    <Segment raised>
      <h1>
        {entry.date} <Icon name='stethoscope' /> {entry.employerName}
      </h1>
      {entry.diagnosisCodes && (
        <DiagnosisComponent diagnosisCodes={entry.diagnosisCodes} />
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

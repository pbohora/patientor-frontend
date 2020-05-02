import React from 'react';
import { Entry } from '../types';

import HospitalEntry from './HospitalEntry';
import HealthCheckEntry from './HealthCheckEntry';
import OccupationalHealthCareEntry from './OccupationalHealthcareEntry';

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case 'Hospital':
      return <HospitalEntry entry={entry} />;
    case 'HealthCheck':
      return <HealthCheckEntry entry={entry} />;
    case 'OccupationalHealthcare':
      return <OccupationalHealthCareEntry entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;

import React from 'react';
// import { Segment, Icon } from 'semantic-ui-react';

import { Diagnosis } from '../types';
import { useStateValue } from '../state';

const DiagnosisComponent: React.FC<{
  diagnosisCodes: Array<Diagnosis['code']>;
}> = ({ diagnosisCodes }) => {
  const [{ diagnosisList }] = useStateValue();
  return (
    <div>
      <h3>Diagnosis</h3>
      <ul>
        {diagnosisCodes.map((diagnosisCode: string) => {
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
  );
};

export default DiagnosisComponent;
